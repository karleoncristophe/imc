import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackList, HOME_STACK } from './constants/home.constantes'

const { Navigator, Screen } = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {HOME_STACK.map((route: HomeStackList) => (
        <Screen
          key={route.id}
          name={route.name}
          component={route.component}
          options={{
            animation: 'slide_from_right',
          }}
        />
      ))}
    </Navigator>
  )
}
