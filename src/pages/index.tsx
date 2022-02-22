import { useTranslation } from 'react-i18next'
import Sidebar from '~/components/Sidebar'
import Container from '~/components/Container'
import Header from '~/components/Header'
import Title from '~/components/Title'

function Index() {
  const [t] = useTranslation()
  return (
    <>
      <Header />

      <main className="flex lg:flex-row flex-col max-w-6xl mx-auto">
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
                {t('about_me.content', { returnObjects: true }).map(
                  (text: string, index: number) => (
                    <p key={index}>{text}</p>
                  ),
                )}
              </section>

              <section>
                <Title>{t('work_experience.title')}</Title>
                <div className="space-y-6">
                  {t('work_experience.positions', { returnObjects: true }).map(
                    (position: any, index: number) => (
                      <div key={index}>
                        <h3 className="font-semibold">{position.title}</h3>
                        <p>
                          <small>{position.duration}</small>
                        </p>
                        <ul>
                          {position.tasks.map((task: string, index: number) => (
                            <li key={index}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              </section>

              <section>
                <Title>{t('skills_stack.title')}</Title>
                <ul>
                  {t('skills_stack.content', { returnObjects: true }).map(
                    (text: string, index: number) => (
                      <li key={index}>{text}</li>
                    ),
                  )}
                </ul>
              </section>

              <section>
                <Title>{t('open_source.title')}</Title>
                {t('open_source.description', { returnObjects: true }).map(
                  (text: string, index: number) => (
                    <p key={index}>{text}</p>
                  ),
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
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
