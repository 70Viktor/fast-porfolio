import { type FC, type PropsWithChildren } from 'react'

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className='text-[clamp(2rem,6vw,6rem)] mb-6'>{children}</h2>
}
