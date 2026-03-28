import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({ dark: true, toggle: () => {} })

function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('mm-theme', dark ? 'dark' : 'light')
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('mm-theme')
    const isDark = saved !== null ? saved === 'dark' : true
    // Apply synchronously so the class is present before first paint
    applyTheme(isDark)
    return isDark
  })

  const toggle = () => {
    setDark((prev) => {
      const next = !prev
      applyTheme(next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
