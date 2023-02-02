import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  placeholder?: string
  ff?: string
  w?: string
  fz?: number
}

export const Input: React.FC<Props> = (props) => {
  const theme = useTheme()
  return (
    <Container
      {...props}
      placeholder={props.placeholder || ''}
      placeholderTextColor={theme.colors.disable200}
    />
  )
}

const Container = styled(TextInput)<Props>`
  height: 50px;
  font-family: ${(p) => p.ff || p.theme.fonts.Poppins400};
  padding-horizontal: 16px;
  border-radius: 5px;
  justify-content: center;
  font-size: ${(p) => p.fz ?? 16}px;
  border: 1px solid ${(p) => p.theme.colors.disable300};
  color: ${(p) => p.theme.colors.text};
  ${(p) =>
    p.w &&
    css`
      width: ${p.w};
    `};
`
