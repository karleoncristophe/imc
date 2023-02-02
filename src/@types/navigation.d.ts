import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { HomeStackParamList, HomeStackScreenProps } from './tabs/HomeNavigation'
import {
  ProfileStackParamList,
  ProfileStackScreenProps,
} from './tabs/ProfileNavigation'

export type MVPStackParamList = {
  Welcome: undefined
  Home: undefined
}

export type RootStackParamList = {
  Welcome: undefined
}

export type DashTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>
}

export type MVPStackScreenProps<T extends keyof MVPStackParamList> =
  NativeStackScreenProps<MVPStackParamList, T>

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type DashTabScreenProps<T extends keyof DashTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<DashTabParamList, T>,
    MVPStackScreenProps<keyof MVPStackParamList>,
    RootStackScreenProps<keyof RootStackParamList>,
    HomeStackScreenProps<keyof HomeStackParamList>,
    ProfileStackScreenProps<keyof ProfileStackParamList>
  >

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
