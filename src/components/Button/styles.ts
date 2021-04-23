import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    height: 56px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
  `}
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.regular};
  `}
`;
