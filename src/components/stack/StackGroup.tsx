import { Label } from '@ui'
import { type FC } from 'react'

export interface StackGroupProps {
  title: string
  items: string[]
}

export const StackGroup: FC<StackGroupProps> = ({ title, items }) => {
  return (
    <article className='grid gap-6'>
      <Label as='h3'>{title}</Label>

      <div className='flex flex-wrap gap-3'>
        {items.map((item) => (
          <span
            key={item}
            className='border border-white/10 px-4 py-2 text-sm text-white/70'
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
