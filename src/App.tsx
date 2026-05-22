import { Contacts, Hero, ProjectsList, Stack } from '@components'
import { Separator } from '@ui'
import { Fragment } from 'react/jsx-runtime'

const sections = [<ProjectsList />, <Stack />, <Contacts />]
const needsSeparator = (index: number) => index + 1 < sections.length

export const App = () => {
  return (
    <main>
      <Hero />

      {sections.map((Section, index) => (
        <Fragment key={index}>
          {Section}

          {needsSeparator(index) && <Separator />}
        </Fragment>
      ))}
    </main>
  )
}
