import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { AppRoutes } from './app.routes'
// import { AuthRoutes } from './auth.routes'
import { MVPRoutes } from './mvp.routes'

export function Routes() {
  // const logged = true
  return (
    <NavigationContainer>
      {/* {logged ? <AppRoutes /> : <AuthRoutes />} */}
      <MVPRoutes />
    </NavigationContainer>
  )
}
