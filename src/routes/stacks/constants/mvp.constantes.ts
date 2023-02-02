import { MVPStackParamList } from '../../../@types/navigation'
import { ScreenComponentType } from '../../../@types/screen'
import { Home } from '../../../views/mvp/Home'
import { Welcome } from '../../../views/mvp/Welcome'
export type MVPStackList = {
  id: number
  name: string
  component:
    | ScreenComponentType<MVPStackParamList, 'Welcome'>
    | ScreenComponentType<MVPStackParamList, 'Home'>
}

const MVPListScreen = {
  Welcome,
  Home,
}

export const MVP_STACK: MVPStackList[] = Object.keys(MVPListScreen).map(
  (i, index) => {
    return {
      id: index,
      name: i,
      component: MVPListScreen[i as keyof MVPStackParamList],
    }
  }
)
