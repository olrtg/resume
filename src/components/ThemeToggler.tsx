import { createEffect, createSignal } from 'solid-js'

export default function ThemeToggler() {
  const [theme, setTheme] = createSignal(
    localStorage.getItem('theme') ?? 'light',
  )

  const handleClick = () => {
    setTheme(theme() === 'light' ? 'dark' : 'light')
  }

  createEffect(() => {
    if (theme() === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme())
  })

  return (
    <button onClick={handleClick} class="text-link">
      {theme() === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
