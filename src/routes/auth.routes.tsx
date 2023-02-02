import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTH_STACK, AuthStackList } from './stacks/constants/auth.contantes'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      {AUTH_STACK.map((route: AuthStackList) => (
        <Screen
          key={route.id}
          name={route.name}
          component={route.component}
          options={{ headerShown: false }}
        />
      ))}
    </Navigator>
  )
}
