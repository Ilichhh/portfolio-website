import styled from 'styled-components';
import theme from '../../theme';

export const SkillBadge = styled.span<{ color?: string; width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: ${({ width }) => width}px;
  padding: 20px;
  border: 4px solid ${theme.colors.textInactive};
  color: ${theme.colors.textDark};
  background-color: ${({ color }) => color};
  box-shadow: 6px 6px ${theme.colors.textInactive};
`;
