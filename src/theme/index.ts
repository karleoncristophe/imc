import { Dimensions, Platform } from 'react-native'

const defaultOptions = {
  isIOS: Platform.OS === 'ios',
  dimensions: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  fonts: {
    Poppins100: 'Poppins-Thin',
    Poppins200: 'Poppins-ExtraLight',
    Poppins300: 'Poppins-Light',
    Poppins400: 'Poppins-Regular',
    Poppins500: 'Poppins-Medium',
    Poppins600: 'Poppins-SemiBold',
    Poppins700: 'Poppins-Bold',
    Poppins800: 'Poppins-ExtraBold',
    Poppins900: 'Poppins-Black',
  },
}

export const theme = {
  default: {
    ...defaultOptions,
    colors: {
      background: '#000000',
      background200: '#212326',
      text: '#eeeeee',
      done: '#86c552',
      worning: '#F7DC6F',
      info: '#276EF1',
      cancel: '#ff6347',
      disable: '#F0F0F0',
      disable200: '#DDDDDD',
      disable300: '#BDBDBD',
    },
  },
}
