import { StackScreenProps } from '@react-navigation/stack'

export type ProfileStackParamList = {
  Profile: undefined
}

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  StackScreenProps<ProfileStackParamList, T>
