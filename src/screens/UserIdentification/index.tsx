import React from 'react';
import { Button } from '../../components/Button';
import * as S from './styles';

export const UserIdentification = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Form>
          <S.Emoji>😄️</S.Emoji>
          <S.Title>Como podemos {'\n'} chamar você?</S.Title>

          <S.Input placeholder="Digite seu nome" />

          <S.Footer>
            <Button title="Confirmar" />
          </S.Footer>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
};
