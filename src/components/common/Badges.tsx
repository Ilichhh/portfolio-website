import styled from 'styled-components';
import theme from '../../theme';

export const SkillBadge = styled.span<{ color?: string; width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: ${({ width }) => width}px;
  padding: 20px;
  color: ${theme.colors.textLight};
  background-color: ${theme.colors.bgDark};
`;
