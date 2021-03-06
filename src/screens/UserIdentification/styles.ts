import styled, { css } from 'styled-components/native';

type InputProps = {
  isFocused: boolean;
};

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View<InputProps>`
  flex: 1;
  width: 100%;
`;
export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 54px;
`;
export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputProps>`
  ${({ theme, isFocused }) => css`
    border-bottom-width: 1px;
    border-color: ${theme.colors.gray};
    color: ${theme.colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;

    ${isFocused &&
    css`
      border-color: ${theme.colors.green};
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    text-align: center;
    color: ${theme.colors.heading};
    font-family: ${theme.font.family.semiBold};
    line-height: 32px;
    margin-top: 20px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;
