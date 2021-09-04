import { Form, Formik } from 'formik'
import moment from 'moment-timezone'
import React, { ReactElement, useEffect, useState } from 'react'
import renderPage from 'renderPage'
import styled from 'styled-components'

import { Container, Icon, Modal, Text, Title } from '~/components/common'
import Table from '~/components/common/Table'
import { BG_GRADIENT, WHITE } from '~/constants'
import {
  computeWordCount,
  formatQuestionType,
} from '~/pages/club/[club]/application/[application]'
import {
  APPLICATION_STATUS_TYPES,
  ApplicationQuestionType,
  ApplicationResponse,
  ApplicationSubmission,
} from '~/types'
import { doApiRequest } from '~/utils'

const StyledResponses = styled.div`
  margin-bottom: 40px;
`
const ModalContainer = styled.div`
  text-align: left;
  padding: 20px;
`

const SubmissionModal = (props: {
  submission: ApplicationSubmission | null
}): ReactElement => {
  const { submission } = props
  const initialValues = {}
  const wordCounts = {}
  if (submission !== null) {
    submission.responses.forEach((response) => {
      switch (parseInt(response.question_type)) {
        case ApplicationQuestionType.FreeResponse:
          wordCounts[response.question.id] =
            response.text != null ? computeWordCount(response.text) : 0
          initialValues[response.question.id] = response.text
          break
        case ApplicationQuestionType.ShortAnswer:
          initialValues[response.question.id] = response.text
          break
        case ApplicationQuestionType.MultipleChoice:
          initialValues[response.question.id] =
            response.multiple_choice !== null
              ? response.multiple_choice.value
              : null
          break
        default:
          break
      }
    })
  }

  return (
    <ModalContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          // pass
        }}
      >
        {(props) => (
          <Form>
            {submission !== null && submission.responses !== null
              ? submission.responses.map((response: ApplicationResponse) => {
                  const input = formatQuestionType(
                    null,
                    response.question,
                    wordCounts,
                    () => {
                      // pass
                    },
                    true,
                  )
                  return (
                    <div>
                      {input}
                      <br></br>
                    </div>
                  )
                })
              : null}
          </Form>
        )}
      </Formik>
    </ModalContainer>
  )
}

function SubmissionDashboard(): ReactElement {
  const [submissions, setSubmissions] = useState<Array<ApplicationSubmission>>(
    [],
  )
  const [showModal, setShowModal] = useState<boolean>(false)
  const [
    currentSubmission,
    setCurrentSubmission,
  ] = useState<ApplicationSubmission | null>(null)

  const responseTableFields = [
    { label: 'Application', name: 'name' },
    { label: 'Committee', name: 'committee' },
    { label: 'Submitted', name: 'created_at' },
    { label: 'Club', name: 'club' },
    {
      name: 'application_link',
      label: 'Link',
      render: (id) => {
        const submission = submissions.find(
          (submission) => submission.pk === id,
        )
        return submission != null ? (
          <>
            <a href={submission.application_link}>
              <button
                onClick={(e) => e.stopPropagation()}
                className="button is-primary is-small ml-3"
              >
                <Icon name="edit" />
                Edit
              </button>
            </a>
          </>
        ) : null
      },
    },
  ]

  useEffect(() => {
    if (submissions !== null) {
      doApiRequest(`/submissions/?format=json`, {
        method: 'GET',
      })
        .then((resp) => resp.json())
        .then((responses) => {
          return responses.map((response) => {
            return {
              ...response,
              committee: response.committee?.name ?? 'General Member',
              status: APPLICATION_STATUS_TYPES.find(
                (status) => status.value === response.status,
              )?.label,
              created_at: moment(response.created_at)
                .tz('America/New_York')
                .format('LLL'),
            }
          })
        })
        .then((responses) => setSubmissions(responses))
    }
  }, [])

  return (
    <>
      <Container background={BG_GRADIENT} style={{ height: '6rem' }}>
        <Title style={{ marginTop: '1rem', color: WHITE, opacity: 0.95 }}>
          Application Submissions
        </Title>
      </Container>
      <Container>
        <Text>
          On this page you can view your submitted applications. Click on any
          application to view your submission. If there is something you would
          like to change, just click edit and resubmit to update your
          submission.
        </Text>
        <StyledResponses>
          <Table
            data={submissions.map((item, index) =>
              item.pk ? { ...item, id: item.pk } : { ...item, id: index },
            )}
            columns={responseTableFields}
            searchableColumns={['name']}
            filterOptions={[]}
            focusable={true}
            onClick={(row) => {
              setShowModal(true)
              const submission =
                submissions.find(
                  (submission) => submission.pk === row.original.pk,
                ) ?? null
              setCurrentSubmission(submission)
            }}
          />
        </StyledResponses>
        {showModal && (
          <Modal
            show={showModal}
            closeModal={() => setShowModal(false)}
            width="80%"
            marginBottom={false}
          >
            <SubmissionModal submission={currentSubmission} />
          </Modal>
        )}
      </Container>
    </>
  )
}

export default renderPage(SubmissionDashboard)
