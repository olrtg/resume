export function useStorage(key: string, defaultValue?: any) {
  const [value, setValue] = useState(
    localStorage.getItem(key) || defaultValue,
  )

  return [
    value,
    (newValue: any) => {
      localStorage.setItem(key, newValue)
      return setValue(newValue)
    },
  ]
}
