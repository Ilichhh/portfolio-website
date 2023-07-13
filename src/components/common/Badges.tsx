import styled, { css } from 'styled-components';
import theme from '../../theme';

export const TechBadge = styled.span<{ small?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  ${({ small }) =>
    small &&
    css`
      height: 32px;
      padding: 0 14px;
      font-size: 18px;
    `};
  color: ${theme.colors.textLight};
  background-color: ${theme.colors.bgDark};
`;
