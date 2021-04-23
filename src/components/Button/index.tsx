import React from 'react';
import { Alert } from 'react-native';
import * as S from './styles';
type ButtonProps = {
  title: string;
};
export const Button = ({ title }: ButtonProps) => {
  return (
    <S.Container onPress={() => Alert.alert('teste')}>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};
