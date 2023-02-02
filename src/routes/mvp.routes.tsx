import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MVP_STACK, MVPStackList } from './stacks/constants/mvp.constantes'

const { Navigator, Screen } = createNativeStackNavigator()

export function MVPRoutes() {
  return (
    <Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      {MVP_STACK.map((route: MVPStackList) => (
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
