import { StackScreenProps } from '@react-navigation/stack'

export type HomeStackParamList = {
  Home: undefined
}

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>
