import { ScreenComponentType } from '../../../@types/screen'
import { HomeStackParamList } from '../../../@types/tabs/HomeNavigation'
import { Home } from '../../../views/app/Home'

export type HomeStackList = {
  id: number
  name: string
  component: ScreenComponentType<HomeStackParamList, 'Home'>
}

const HomeListScreen = {
  Home,
}

export const HOME_STACK: HomeStackList[] = Object.keys(HomeListScreen).map(
  (i, index) => {
    return {
      id: index,
      name: i,
      component: HomeListScreen[i as keyof HomeStackParamList],
    }
  }
)
