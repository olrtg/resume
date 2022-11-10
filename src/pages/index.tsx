import { useTranslation } from 'react-i18next'

import Sidebar from '~/components/Sidebar'
import Container from '~/components/Container'
import Header from '~/components/Header'
import Title from '~/components/Title'

import type { Position } from '~/types/position'

function calculateAge(birthday: Date): number {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

function calculateYearsOfExperience(start: Date): number {
  const ageDifMs = Date.now() - start.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export default function Index() {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <main className="flex flex-col max-w-6xl mx-auto lg:flex-row">
        <div className="w-full lg:w-1/4">
          <Container>
            <Sidebar />
          </Container>
        </div>

        <div className="w-full lg:w-3/4">
          <Container>
            <div className="space-y-8">
              <section>
                <Title>{t('about_me.title')}</Title>
                {t<string, string[]>('about_me.content', {
                  age: calculateAge(new Date('1998-01-23')),
                  yearsOfExperience: calculateYearsOfExperience(
                    new Date('2016-09-14'),
                  ),
                  returnObjects: true,
                }).map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </section>

              <section>
                <Title>{t('work_experience.title')}</Title>
                <div className="space-y-6">
                  {t<string, Position[]>('work_experience.positions', {
                    returnObjects: true,
                  }).map((position, index) => (
                    <div key={index}>
                      <h3 className="font-semibold">{position.title}</h3>
                      <p>
                        <small>{position.duration}</small>
                      </p>
                      <ul>
                        {position.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <Title>{t('skills_stack.title')}</Title>
                <ul>
                  {t<string, string[]>('skills_stack.content', {
                    returnObjects: true,
                  }).map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </section>

              <section>
                <Title>{t('open_source.title')}</Title>
                {t<string, string[]>('open_source.description', {
                  returnObjects: true,
                }).map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h3 className="font-semibold">nvim-rename-state</h3>
                    <p className="!mb-2">
                      Rename the getter and the setter of a state hook in
                      react/solidjs at the same time.
                    </p>
                    <div className="flex space-x-4 text-lg">
                      <a href="https://github.com/olrtg/nvim-rename-state">
                        <IconIonLogoGithub />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">macd</h3>
                    <p className="!mb-2">macOS defaults for humans.</p>
                    <div className="flex space-x-4 text-lg">
                      <a
                        href="https://www.npmjs.com/package/@olrtg/macd"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconIonLogoNpm />
                      </a>
                      <a href="https://github.com/olrtg/macd">
                        <IconIonLogoGithub />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">Venus</h3>
                    <p className="!mb-2">
                      Opinionated Vite starter template for modern React
                      development
                    </p>
                    <div className="flex space-x-4 text-lg">
                      <a href="https://github.com/olrtg/venus">
                        <IconIonLogoGithub />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">bulma-fab-button</h3>
                    <p className="!mb-2">
                      A Bulma&apos;s extension for FABs (Floating Action
                      Buttons)
                    </p>
                    <div className="flex space-x-4 text-lg">
                      <a
                        href="https://www.npmjs.com/package/bulma-fab-button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconIonLogoNpm />
                      </a>
                      <a
                        href="https://github.com/olrtg/bulma-fab-button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconIonLogoGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <Title>{t('languages.title')}</Title>
                <p>{t('languages.content')}</p>
              </section>
            </div>

            <footer className="mt-8 text-center print:hidden">
              <button onClick={() => window.print()} className="text-link">
                {t('button.pdf')}
              </button>
            </footer>
          </Container>
        </div>
      </main>
    </>
  )
}
