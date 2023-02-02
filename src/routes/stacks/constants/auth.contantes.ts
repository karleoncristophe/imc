import { RootStackParamList } from '../../../@types/navigation'
import { ScreenComponentType } from '../../../@types/screen'
import { Welcome } from '../../../views/auth/Welcome'

export type AuthStackList = {
  id: number
  name: string
  component: ScreenComponentType<RootStackParamList, 'Welcome'>
}

const AuthListScreen = {
  Welcome,
}

export const AUTH_STACK: AuthStackList[] = Object.keys(AuthListScreen).map(
  (i, index) => {
    return {
      id: index,
      name: i,
      component: AuthListScreen[i as keyof RootStackParamList],
    }
  }
)
