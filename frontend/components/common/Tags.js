import Color from 'color'
import s from 'styled-components'

import {
  DARK_BLUE,
  LIGHTER_BLUE,
  WHITE,
  CLUBS_BLUE,
  DARK_GRAY,
  FOCUS_GRAY,
} from '../../constants/colors'

export const Tag = s.span`
  margin: 0 4px 4px 0;
  font-weight: 600;
  ${({ color }) =>
    color &&
    `
    background-color: #${color} !important;
    color: ${Color(`#${color}`)
      .negate()
      .hex()} !important;
  `}
`

export const BlueTag = s(Tag)`
  background-color: ${LIGHTER_BLUE} !important;
  color: ${DARK_BLUE} !important;
`

export const SelectedTag = s(Tag)`
  background-color: ${CLUBS_BLUE} !important;
  color: ${WHITE} !important;
`

export const InactiveTag = s(Tag)`
  background-color: ${FOCUS_GRAY} !important;
  color: ${DARK_GRAY} !important;
`

export const DetailTag = InactiveTag
