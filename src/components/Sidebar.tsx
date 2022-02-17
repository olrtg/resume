import { Platforms, getSocial } from '~/utils/socials'

const Sidebar = () => {
  const socials = [
    { url: getSocial(Platforms.LinkedIn), icon: <IconIonLogoLinkedin /> },
    { url: getSocial(Platforms.GitHub), icon: <IconIonLogoGithub /> },
    { url: getSocial(Platforms.Twitter), icon: <IconIonLogoTwitter /> },
  ] as const

  return (
    <aside className="space-y-4 lg:text-left text-center">
      <div id="basic">
        <h1 className="text-2xl font-bold">José Olórtegui</h1>
        <p>Frontend Developer</p>
      </div>
      <div id="contact">
        <a href="mailto:jolortegui98@gmail.com" className="text-link">
          jolortegui98@gmail.com
        </a>
      </div>
      <div
        id="socials"
        className="flex lg:justify-start justify-center items-center space-x-4"
      >
        {socials.map(({ url, icon }) => (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            key={url}
            className="text-lg"
          >
            {icon}
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
