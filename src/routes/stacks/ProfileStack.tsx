import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PROFILE_STACK, ProfileStackList } from './constants/profile.constantes'

const { Navigator, Screen } = createNativeStackNavigator()

export default function ProfileStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {PROFILE_STACK.map((route: ProfileStackList) => (
        <Screen
          key={route.id}
          name={route.name}
          component={route.component}
          options={{ animation: 'slide_from_right' }}
        />
      ))}
    </Navigator>
  )
}
