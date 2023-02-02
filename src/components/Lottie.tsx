import React from 'react'
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native'

type IProps = AnimatedLottieViewProps & {
  show: boolean
  width?: number
  height?: number
}

export const Lottie: React.FC<IProps> = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <LottieView
      {...props}
      style={{
        width: props.width || 200,
        height: props.height || 200,
      }}
      autoPlay
    />
  )
}
