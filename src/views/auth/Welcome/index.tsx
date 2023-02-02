import React from 'react'
import { RootStackScreenProps } from '../../../@types/navigation'
import { useTheme } from 'styled-components/native'
import { ScrollWrapperView } from '../../../components/ScrollWrapperView'

export const Welcome: React.FC<RootStackScreenProps<'Welcome'>> = ({}) => {
  const theme = useTheme()

  return <ScrollWrapperView />
}
