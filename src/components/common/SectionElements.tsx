import { PropsWithChildren } from 'react';

import styled from 'styled-components';
import theme from '../../theme';

const Header = styled.h2`
  margin: 0;
  font-size: 36px;
`;

const ContentBox = styled.div`
  padding: 60px 0 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10%;
`;

const Section = styled.section<{ bgColor: string; height?: string }>`
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: 4px solid ${theme.colors.textDark};
`;

interface SectionWrapperProps extends PropsWithChildren {
  bgColor: string;
  height?: string;
}

export const SectionWrapper = ({ children, bgColor, height }: SectionWrapperProps) => {
  return (
    <Section bgColor={bgColor} height={height}>
      {children}
    </Section>
  );
};

export const SectionHeader = ({ children }: PropsWithChildren) => {
  return <Header>{children}</Header>;
};

export const SectionContent = ({ children }: PropsWithChildren) => {
  return <ContentBox>{children}</ContentBox>;
};

export const TwoColumnsWrapper = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
