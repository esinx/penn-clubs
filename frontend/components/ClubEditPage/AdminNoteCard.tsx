import { Field } from 'formik'
import { ReactElement } from 'react'

import { Club } from '../../types'
import { Text } from '../common'
import { TextField } from '../FormComponents'
import { ModelForm } from '../ModelForm'
import BaseCard from './BaseCard'

type AdminNotesCardProps = {
  club: Club
}

export default function AdminNotesCard({
  club,}: AdminNotesCardProps): ReactElement {
  return (
    <BaseCard title="Admin Notes">
      <Text>
        Use this page to create notes for the club
      </Text>
      <ModelForm
        baseUrl={`/clubs/${club.code}/adminnotes`}
        // initialData={club.content}
        fields={<Field name="text" as={TextField} type="textarea" noLabel />}
      />
    </BaseCard>
  )
}
