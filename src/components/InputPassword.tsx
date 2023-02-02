import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'
import { Icon } from './Icon'

type Props = TextInputProps & {
  placeholder?: string
  ff?: string
  w?: string
  fz?: number
  enable: boolean
  setEnable: (enable: boolean) => void
}

export const InputPassword: React.FC<Props> = (props) => {
  const toggle = () => {
    props.setEnable(!props.enable)
  }
  const theme = useTheme()
  return (
    <Wrapper {...props}>
      <Container
        {...props}
        placeholder={props.placeholder || ''}
        secureTextEntry={props.enable ? false : true}
        placeholderTextColor={theme.colors.disable}
      />
      <Button onPress={toggle}>
        {props.enable ? (
          <Icon type="Entypo" color={theme.colors.text} size={20} name="eye" />
        ) : (
          <Icon
            type="Entypo"
            color={theme.colors.text}
            size={20}
            name="eye-with-line"
          />
        )}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.View<Props>`
  height: 50px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.disable300};
  font-family: ${(props) => props.ff || props.theme.fonts.Poppins400};
  padding-horizontal: 24px;
  padding-vertical: 8px;
  border-radius: 5px;
  ${(props) =>
    props.w &&
    css`
      width: ${props.w};
    `};
`

const Container = styled(TextInput)<Props>`
  flex: 1;
  height: 50px;
  font-size: ${(props) => props.fz ?? 16}px;
  color: ${(p) => p.theme.colors.text};
`

const Button = styled.Pressable``
