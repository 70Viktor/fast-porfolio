import clsx from 'clsx'
import { type FC, type PropsWithChildren } from 'react'

interface LinkProps extends PropsWithChildren {
  href: string
  className?: string
}

export const Link: FC<LinkProps> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'group inline-flex items-center gap-3 border border-white/10 px-5 py-3 transition-colors duration-300 hover:bg-white hover:text-black',
        className,
      )}
    >
      <span className='text-sm uppercase tracking-[0.16em]'>{children}</span>

      <span className='relative inline-grid size-4 overflow-hidden leading-none'>
        <span className='grid place-items-center transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full'>
          ↗
        </span>

        <span className='absolute inset-0 grid -translate-x-full translate-y-full place-items-center transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0'>
          ↗
        </span>
      </span>
    </a>
  )
}
