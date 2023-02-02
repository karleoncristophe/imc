import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from './routes'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme.default}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
