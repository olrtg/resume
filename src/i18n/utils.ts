import { ui, defaultLang } from './ui'

type Ui = typeof ui
type Lang = keyof Ui
type Translation = Ui[typeof defaultLang]
type TranslationKey = keyof Translation

function interpolateValue<T>(value: T, params?: Record<string, unknown>): T {
  if (!params) return value

  if (typeof value === 'string') {
    return value.replace(/{{([^{}\s]+)}}/g, (_, token: string) => {
      const replacement = params[token]
      return replacement === undefined ? `{{${token}}}` : String(replacement)
    }) as T
  }

  if (Array.isArray(value)) {
    return value.map((item) => interpolateValue(item, params)) as unknown as T
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).map(
      ([key, innerValue]) => [key, interpolateValue(innerValue, params)],
    )
    return Object.fromEntries(entries) as T
  }

  return value
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t<Key extends TranslationKey>(
    key: Key,
    params?: Record<string, unknown>,
  ): Translation[Key] {
    const translation = (ui[lang][key] ??
      ui[defaultLang][key]) as Translation[Key]
    return interpolateValue(translation, params)
  }
}
