import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark, light } from 'theme'

const ThemeContext = React.createContext({})

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <SCThemeProvider theme={light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
