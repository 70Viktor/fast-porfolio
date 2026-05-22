import clsx from 'clsx'
import { type ElementType, type FC, type PropsWithChildren } from 'react'

interface LabelProps<T extends ElementType> extends PropsWithChildren {
  as?: T
  className?: string
}

export const Label: FC<LabelProps<ElementType>> = ({
  as: Component = 'span',
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        'text-sm uppercase tracking-[0.16em] text-white/40',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
