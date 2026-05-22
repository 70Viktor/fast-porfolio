import { SectionContainer, SectionTitle } from '@ui'
import { Fragment, type FC } from 'react'
import { projectsData } from './data'
import { ProjectCard } from './ProjectCard'

const needsSeparator = (index: number) => index + 1 < projectsData.length

export const ProjectsList: FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>Проекты</SectionTitle>
      {projectsData.map((data, index) => (
        <Fragment key={data.title}>
          <ProjectCard {...data} />

          {needsSeparator(index) && (
            <div className='h-px bg-linear-to-r from-transparent via-neutral-600 to-transparent' />
          )}
        </Fragment>
      ))}
    </SectionContainer>
  )
}
