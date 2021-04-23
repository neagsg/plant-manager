import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Button } from '../../components/Button';
import * as S from './styles';

export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  return (
    <S.Wrapper>
      <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <S.Content isFocused={isFocused}>
          <S.Form>
            <S.Emoji>😄️</S.Emoji>
            <S.Title>Como podemos {'\n'} chamar você?</S.Title>

            <S.Input
              placeholder="Digite seu nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              isFocused={isFocused}
            />

            <S.Footer>
              <Button title="Confirmar" />
            </S.Footer>
          </S.Form>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
