import { ReactElement } from 'react'

import { Container, Metadata, Title } from '../components/common'
import AuthPrompt from '../components/common/AuthPrompt'
import QueueTab from '../components/Settings/QueueTab'
import RenewTab from '../components/Settings/RenewTab'
import TabView from '../components/TabView'
import { WHITE } from '../constants/colors'
import renderPage from '../renderPage'

function UserRenewal({ userInfo, authenticated }): ReactElement {
  if (authenticated === null) {
    return <div />
  }

  if (!userInfo) {
    return <AuthPrompt />
  }

  const tabs = [
    {
      name: 'Clubs',
      content: <RenewTab userInfo={userInfo} />,
    },
    { name: 'Queue', content: <QueueTab /> },
  ]

  const gradient = 'linear-gradient(to right, #4954f4, #44469a)'

  return (
    <>
      <Metadata title="Renew Clubs" />
      <Container background={gradient}>
        <Title style={{ marginTop: '2.5vw', color: WHITE, opacity: 0.95 }}>
          Renew Clubs
        </Title>
      </Container>
      <TabView background={gradient} tabs={tabs} tabClassName="is-boxed" />
    </>
  )
}

export default renderPage(UserRenewal)
