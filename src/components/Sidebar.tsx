import { Platforms, getSocial } from '~/utils/socials'

const Sidebar = () => {
  const socials = [
    [ getSocial(Platforms.LinkedIn), <IconIonLogoLinkedin /> ],
    [ getSocial(Platforms.GitHub), <IconIonLogoGithub /> ],
    [ getSocial(Platforms.Twitter), <IconIonLogoTwitter/> ]
  ] as const

  return (
    <aside className="space-y-4">
      <div id="basic">
        <h1 className="text-2xl font-bold">José Olórtegui</h1>
        <p>Frontend Developer</p>
      </div>    
      <div id="contact">
        <a href="mailto:jolortegui98@gmail.com" className="text-link">jolortegui98@gmail.com</a>
      </div>
      <div id="socials" className="flex items-center space-x-4">
        {socials.map(([url, icon]) => (
          <a href={url} target="_blank" key={url} className="text-lg">{icon}</a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar