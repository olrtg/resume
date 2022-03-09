import { useTranslation } from 'react-i18next'

import Sidebar from '~/components/Sidebar'
import Container from '~/components/Container'
import Header from '~/components/Header'
import Title from '~/components/Title'

import type { Position } from '~/types/position'

function Index() {
  const [t] = useTranslation()
  return (
    <>
      <Header />

      <main className="flex flex-col mx-auto max-w-6xl lg:flex-row">
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

export default Index
