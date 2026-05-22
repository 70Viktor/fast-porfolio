import { type FC, type PropsWithChildren } from 'react'

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className='px-[clamp(1rem,8vw,10rem)] my-16'>{children}</div>
}
