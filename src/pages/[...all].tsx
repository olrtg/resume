import { useTranslation } from 'react-i18next'

function All() {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">404 - {t('not_found.title')}</h1>
      <p className="mt-2">
        {t('not_found.description')} <code>{pathname}</code>.
      </p>
      <Link className="text-link" to="/">
        {t('button.go_to_home')}
      </Link>
    </div>
  )
}

export default All
