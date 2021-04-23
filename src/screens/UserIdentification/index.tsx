import React from 'react';
import * as S from './styles';

export const UserIdentification = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Form>
          <S.Emoji>😄️</S.Emoji>
          <S.Title>Como podemos {'\n'} chamar você?</S.Title>

          <S.Input />
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
};
