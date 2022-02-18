import Sidebar from '~/components/Sidebar'
import Container from '~/components/Container'
import Title from '~/components/Title'
import { Platforms } from '~/utils/socials'

function Index() {
  return (
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
              <Title>About me</Title>
              <p>
                Hello! My name is José Olórtegui, a self-taught developer and a
                freelance frontend developer living in Paraguay. I specialize in frontend web
                technologies and i like to take care of the experience,
                architecture and code quality of the things I build. I am a
                heavy believer in craftmanship.
              </p>
              <p>
                In my spare time, most of the times, you will find me playing
                games or coding something.
              </p>
            </section>

            <section>
              <Title>Work experience</Title>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">Freelance</h3>
                  <p>
                    <small>Feb 2020 — Present</small>
                  </p>
                  <ul>
                    <li>
                      Worked on a lot of projects with Wordpress and its
                      ecosystem.
                    </li>
                    <li>
                      Develop a Mobile App for one of the largest social clubs
                      in my country.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Girolabs S.A — Technical Coordinator
                  </h3>
                  <p>
                    <small>Sep 2019 — Feb 2020</small>
                  </p>
                  <ul>
                    <li>
                      Helped to solve issues with implementations that
                      didn&apos;t allow the team to make progress.
                    </li>
                    <li>
                      Research and implement new tecnologies, metodologies or
                      tools into the team&apos;s workflow.
                    </li>
                    <li>Train and advise new teammates.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Girolabs S.A — Project Manager
                  </h3>
                  <p>
                    <small>Jul 2019 — Sep 2019</small>
                  </p>
                  <ul>
                    <li>
                      Manage the timings of the projects for all of our clients.
                    </li>
                    <li>
                      In charge of managing the relationship between the client
                      and the team.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Girolabs S.A — Visual &amp; Frontend Developer, UI Designer
                  </h3>
                  <p>
                    <small>Sep 2016 — Jul 2019</small>
                  </p>
                  <ul>
                    <li>
                      Developed a lot of custom themes for Wordpress from
                      scratch.
                    </li>
                    <li>
                      I was in charge of producing mostly all of the development
                      work for our clients.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <Title>Skills &amp; Stack</Title>
              <ul>
                <li>
                  Expert with Typescript, Angular and Ionic. Also with
                  Wordpress.
                </li>
                <li>
                  For styling I like to use Tailwind CSS, but I can switch to
                  any CSS library or even plain CSS.
                </li>
                <li>
                  Used before other Javascript frameworks such as Nuxt, Next.js
                  and Gatsby.
                </li>
                <li>Web scrapping with Puppeteer.</li>
                <li>Comfortable with the terminal and Linux.</li>
                <li>
                  I use Neovim as my code editor. (
                  <a
                    href={`${Platforms.GitHub}/dotfiles`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    dotfiles
                  </a>
                  )
                </li>
                <li>Capable of doing DevOps tasks.</li>
                <li>Basic knowledge of Docker.</li>
                <li>Zero experience with backend development.</li>
                <li>Currently learning Golang and about bundlers with Vite.</li>
                <li>
                  Comfortable using design software such as Figma and Photoshop.
                </li>
                <li>Experience with photo retouching.</li>
                <li>I use Notion to organize myself.</li>
              </ul>
            </section>

            <section>
              <Title>Open Source</Title>
              <p>
                I have got interested in the tooling that surround us developers
                so, I started contributing to open source projects this year in
                a more consistent basis.
              </p>
              <p>My own projects:</p>
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
                    A Bulma&apos;s extension for FABs (Floating Action Buttons)
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
              <Title>Languages</Title>
              <p>Spanish (Native speaker), English (B2 Upper Intermediate).</p>
            </section>
          </div>

          <footer className="mt-8 text-center print:hidden">
            <button onClick={() => window.print()} className="text-link">
              PDF Version
            </button>
          </footer>
        </Container>
      </div>
    </main>
  )
}

export default Index
