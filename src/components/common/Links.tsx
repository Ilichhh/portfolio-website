import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../theme';

export const StyledLink = styled(Link)<{ color?: string }>`
  position: relative;
  gap: 6px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ color }) => (color ? color : theme.colors.textDark)};
  transition: 0.2s all;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${({ color }) => (color ? color : theme.colors.textDark)};
    transition: 0.2s all ease-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

export const LinkIcon = styled(Link)<{ color?: string }>`
  display: flex;
  color: ${({ color }) => (color ? color : theme.colors.textDark)};
  transition: 0.2s all;
`;
