import { Link, SectionContainer, SectionTitle } from '@ui'
import { type FC } from 'react'

export const Contacts: FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>Контакты</SectionTitle>
      <Link href='https://t.me/ViktorSidenko'>Telegram</Link>
    </SectionContainer>
  )
}
