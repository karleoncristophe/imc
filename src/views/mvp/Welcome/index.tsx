import React from 'react'
import { MVPStackScreenProps } from '../../../@types/navigation'
import { useTheme } from 'styled-components/native'
import { ScrollWrapperView } from '../../../components/ScrollWrapperView'
import { TextBase } from '../../../components/TextBase'
import { Button } from '../../../components/Button'

export const Welcome: React.FC<MVPStackScreenProps<'Welcome'>> = ({
  navigation,
}) => {
  const theme = useTheme()

  return (
    <ScrollWrapperView>
      <TextBase>Bem vindo </TextBase>
      <Button onPress={() => navigation.navigate('Home')}>
        <TextBase>Next page</TextBase>
      </Button>
    </ScrollWrapperView>
  )
}
