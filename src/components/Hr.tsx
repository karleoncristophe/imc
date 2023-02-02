import React from 'react'
import { View, ViewProps } from 'react-native'
import styled from 'styled-components/native'

type Props = ViewProps & {
  c?: string
  h?: number
}

export const Hr: React.FC<Props> = (props) => <Wrapper {...props} />

const Wrapper = styled(View)<Props>`
  width: 100%;
  height: ${(props) => props.h || 1}px;
  background-color: ${(props) => props.c || props.theme.colors.disable};
`
