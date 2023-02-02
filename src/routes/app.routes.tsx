import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'
// import {
//   getFocusedRouteNameFromRoute,
//   ParamListBase,
//   RouteProp,
// } from '@react-navigation/native'
import { Icon } from '../components/Icon'
import HomeStack from './stacks/HomeStack'
import ProfileStack from './stacks/ProfileStack'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="HomeTab"
        component={HomeStack}
        options={() => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          title: 'Home',
          tabBarInactiveTintColor: theme.colors.text300,
          tabBarStyle: {
            height: theme.isIOS ? 90 : 65,
            backgroundColor: theme.colors.background,
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color }) => (
            <Icon type="Octicons" name="home" size={21} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
          },
        })}
      />

      <Screen
        name="ProfileTab"
        component={ProfileStack}
        options={() => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarInactiveTintColor: theme.colors.text300,
          title: 'Perfil',
          tabBarStyle: {
            height: theme.isIOS ? 90 : 65,
            backgroundColor: theme.colors.background,
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color }) => (
            <Icon type="FontAwesome5" name="user" size={21} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
          },
        })}
      />
    </Navigator>
  )
}
