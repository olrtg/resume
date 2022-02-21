import { useTranslation } from 'react-i18next'
import { useDarkTheme } from '~/utils/dark'

const Header = () => {
  const [isDark, toggleDark] = useDarkTheme()
  const [t, i18n] = useTranslation()

  const languages = Object.keys(i18n.services.resourceStore.data)
  const toggleLanguages = () =>
    i18n.changeLanguage(
      languages[(languages.indexOf(i18n.language) + 1) % languages.length],
    )

  return (
    <header className="flex print:hidden justify-center items-center space-x-4 pt-4">
      <button className="text-link" onClick={toggleDark}>
        {!isDark ? t('button.toggle_dark') : t('button.toggle_light')}
      </button>
      <button onClick={toggleLanguages} className="text-link uppercase">
        {languages[(languages.indexOf(i18n.language) + 1) % languages.length]}
      </button>
    </header>
  )
}

export default Header
