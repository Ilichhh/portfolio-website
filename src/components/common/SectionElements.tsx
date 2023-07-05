import styled from 'styled-components';
import theme from '../../theme';

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: 36px;
`;

export const SectionContent = styled.div`
  padding: 60px 0 60px;
`;

export const TwoColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10%;
`;

export const SectionWrapper = styled.section<{ bgColor: string; height?: string }>`
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: 4px solid ${theme.colors.textDark};
`;
