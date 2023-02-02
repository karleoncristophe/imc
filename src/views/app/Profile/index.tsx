import React from 'react'
import { useTheme } from 'styled-components/native'
import { ProfileStackScreenProps } from '../../../@types/tabs/ProfileNavigation'
import { ScrollWrapperView } from '../../../components/ScrollWrapperView'

export const Profile: React.FC<ProfileStackScreenProps<'Profile'>> = ({}) => {
  const theme = useTheme()

  return <ScrollWrapperView />
}
