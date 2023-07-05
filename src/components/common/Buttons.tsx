import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../theme';

export const LinkButton = styled(Link)<{ color: string; width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: ${({ width }) => width}px;
  padding: 20px;
  text-decoration: none;
  border: 4px solid ${theme.colors.textDark};
  color: ${theme.colors.textDark};
  background-color: ${({ color }) => color};
  box-shadow: 6px 6px ${theme.colors.textDark};
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px;
  }
`;
