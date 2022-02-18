import { useDarkTheme } from '~/utils/dark'
const Header = () => {
  const [isDark, toggleDark] = useDarkTheme()
  return (
    <header className="flex print:hidden justify-center items-center space-x-4 pt-4">
      <button className="text-link" onClick={toggleDark}>
        { !isDark ? 'Dark' : 'Light' }
      </button>
      { /* <button className="text-link">Español</button> */ }
    </header>
  )
}

export default Header
