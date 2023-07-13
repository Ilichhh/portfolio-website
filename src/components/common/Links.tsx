import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../theme';

export const StyledLink = styled(Link)<{ color?: string }>`
  position: relative;
  font-weight: 600;
  color: ${theme.colors.textDark};
  transition: 0.2s all;
  &:hover {
    filter: drop-shadow(2px 2px ${({ color }) => color});
  }
`;
