import { SectionContainer, SectionTitle } from '@ui'
import { type FC } from 'react'
import { stackData } from './data'
import { StackGroup } from './StackGroup'

export const Stack: FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>Технологии</SectionTitle>

      <div className='grid gap-12'>
        {stackData.map((group) => (
          <StackGroup
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
