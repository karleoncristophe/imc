import { ScreenComponentType } from '../../../@types/screen'
import { ProfileStackParamList } from '../../../@types/tabs/ProfileNavigation'
import { Profile } from '../../../views/app/Profile'

export type ProfileStackList = {
  id: number
  name: string
  component: ScreenComponentType<ProfileStackParamList, 'Profile'>
}

const ProfileListScreen = {
  Profile,
}

export const PROFILE_STACK: ProfileStackList[] = Object.keys(
  ProfileListScreen
).map((i, index) => {
  return {
    id: index,
    name: i,
    component: ProfileListScreen[i as keyof ProfileStackParamList],
  }
})
