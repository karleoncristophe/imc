import React from 'react'
import { Animated, ScrollView, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { Icon } from './Icon'
import { TextBase } from './TextBase'

type Props = {
  open: () => void
  selec: (data: string) => void
  animatedValue: React.MutableRefObject<Animated.Value>
  title: string
  isHidden: boolean
  border: boolean
  arr: {
    label: string
    value: string
  }[]
}
export const DropDown: React.FC<Props> = ({
  open,
  selec,
  animatedValue,
  title,
  arr,
  isHidden,
  border,
}) => {
  const theme = useTheme()

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <DropDownButton
          onPress={open}
          activeOpacity={0.6}
          style={{
            borderBottomRightRadius: !border ? 0 : 5,
            borderBottomLeftRadius: !border ? 0 : 5,
          }}
        >
          <TextBase>{title ? title : 'Selecione'}</TextBase>
          {isHidden ? (
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-down"
              color={theme.colors.text}
              size={16}
            />
          ) : (
            <Icon
              type="MaterialIcons"
              name="keyboard-arrow-up"
              color={theme.colors.text}
              size={16}
            />
          )}
        </DropDownButton>
      </View>

      <Animated.View
        style={[
          { transform: [{ translateY: animatedValue.current }] },
          { zIndex: -1 },
        ]}
      >
        <DropDownContainer
          style={{
            borderTopWidth: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
          }}
        >
          {arr.map((item, index) => (
            <Label key={index} onPress={() => selec(item.label)}>
              {item?.label}
            </Label>
          ))}
        </DropDownContainer>
      </Animated.View>
    </ScrollView>
  )
}

const DropDownButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  font-family: ${(p) => p.theme.fonts.Poppins400};
  padding-horizontal: 16px;
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.colors.disable300};
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.background};
  max-height: 200px;
`
const DropDownContainer = styled.View`
  font-family: ${(p) => p.theme.fonts.Poppins400};
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.colors.disable300};
  color: ${(p) => p.theme.colors.text};
`

const Label = styled.Text`
  padding-vertical: 10px;
  padding-horizontal: 16px;
  color: ${(p) => p.theme.colors.text};
  font-family: ${(p) => p.theme.fonts.Poppins400};
`
