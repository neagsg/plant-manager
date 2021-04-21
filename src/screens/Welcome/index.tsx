import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';
import wateringImg from '../../assets/watering.png';

export const Welcome = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil {'\n'}
      </S.Title>
      <S.Image source={wateringImg} resizeMode="contain" />
      <S.Subtitle>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </S.Subtitle>
      <S.Button activeOpacity={0.8}>
        <Icon name="chevron-right" size={22} color="#fff" />
      </S.Button>
    </S.Wrapper>
  );
};
