import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../theme';

export const StyledLink = styled(Link)<{ color?: string }>`
  position: relative;
  display: flex;
  gap: 6px;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.colors.textDark};
  transition: 0.2s all;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.textDark};
    transition: 0.2s all ease-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;
