import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large}px;
    font-family: ${theme.font.family.semiBold};
    margin-top: ${theme.spacings.xsmall}px;
    color: ${theme.colors.heading}
    text-align: center;
    line-height: 38px;
  `}
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small}px;
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.bodyDark}
    text-align: center;
    line-height: 25px;
  `}
`;
export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    height: 56px;
    width: 56px;
    border-radius: 16px;
    margin-bottom: ${theme.spacings.xxxsmall}px;

    justify-content: center;
    align-items: center;
  `}
`;
