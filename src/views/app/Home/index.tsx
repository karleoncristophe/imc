import React from 'react'
import { useTheme } from 'styled-components/native'
import { HomeStackScreenProps } from '../../../@types/tabs/HomeNavigation'
import { ScrollWrapperView } from '../../../components/ScrollWrapperView'

export const Home: React.FC<HomeStackScreenProps<'Home'>> = ({}) => {
  const theme = useTheme()

  return <ScrollWrapperView />
}
