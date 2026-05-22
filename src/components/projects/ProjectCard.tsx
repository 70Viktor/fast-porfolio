import { Label, Link } from '@ui'
import { type FC } from 'react'

export interface ProjectCardProps {
  title: string
  coverSrc: string
  link: string
  sourceLink?: string
  description: string[]
  contribution: string[]
  stack: string[]
  percent: number
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  coverSrc,
  link,
  sourceLink,
  description,
  contribution,
  stack,
  percent,
}) => {
  return (
    <article className='grid gap-4 py-10'>
      <header className='flex flex-col items-start gap-4 sm:flex-row sm:items-center justify-between relative'>
        <h4 className='text-[clamp(1.5rem,2vw,3rem)] line-clamp-1'>{title}</h4>
        <div className='relative aspect-video w-full sm:w-40 md:w-64 shrink-0 overflow-hidden rounded-md pointer-events-none'>
          <img src={coverSrc} alt='' className='w-full h-full object-cover' />
        </div>
      </header>

      <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-end '>
        <div className='grid gap-8'>
          <div className='grid gap-3'>
            <Label>Описание</Label>

            <ul>
              {description.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>

          <div className='grid gap-3'>
            <Label>Разработал</Label>

            <ul>
              {contribution.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>

          <div className='grid gap-3'>
            <Label>Мой вклад в проект</Label>

            <p>{percent}%</p>
          </div>

          <div className='grid gap-3'>
            <Label>Технологии</Label>

            <ul className='flex flex-wrap gap-2'>
              {stack.map((item) => (
                <li
                  key={item}
                  className='border border-white/10 px-3 py-1 text-sm text-white/60'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-3 shrink-0'>
          <Link href={link}>Открыть проект</Link>

          {sourceLink && <Link href={sourceLink}>Открыть GitHub</Link>}
        </div>
      </div>
    </article>
  )
}
