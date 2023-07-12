import styled from 'styled-components';
import theme from '../../theme';

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: 36px;
  text-align: center;
`;

export const SectionContent = styled.div`
  padding: 60px 0 0;
`;

export const TwoColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10%;
`;

export const SectionWrapper = styled.section<{ bgColor: string; height?: string }>`
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: 4px solid ${theme.colors.textDark};
`;
