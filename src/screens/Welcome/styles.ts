import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large}px;
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xsmall}px;
    color: ${theme.colors.heading}
    text-align: center;
  `}
`;
// export const Banner = styled.Image``;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small}px;
    padding: 0 ${theme.spacings.xxsmall}px;
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

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`;
