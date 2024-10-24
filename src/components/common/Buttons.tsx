import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import theme from '../../theme';

interface ButtonProps {
  color?: string;
  width?: number;
  centered?: boolean;
}

export const BasicButtonStyles = css<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  height: 50px;
  width: ${({ width }) => width}px;
  padding: 20px;
  ${({ centered }) => centered && 'margin: 0 auto;'}
  font-weight: 600;
  border: 4px solid ${theme.colors.textDark};
  color: ${theme.colors.textDark};
  background-color: ${({ color }) => color};
  box-shadow: 6px 6px ${theme.colors.textDark};
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px;
  }
  &: active {
    transform: translate(6px, 6px);
    box-shadow: 0px 0px;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${BasicButtonStyles};
`;

export const LinkButton = styled(Link)<ButtonProps>`
  ${BasicButtonStyles};
  text-decoration: none;
`;
