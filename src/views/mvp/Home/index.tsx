import React from 'react';
import {useTheme} from 'styled-components/native';
import {MVPStackScreenProps} from '../../../@types/navigation';
import {ScrollWrapperView} from '../../../components/ScrollWrapperView';

export const Home: React.FC<MVPStackScreenProps<'Home'>> = ({}) => {
  const theme = useTheme();

  return <ScrollWrapperView />;
};
