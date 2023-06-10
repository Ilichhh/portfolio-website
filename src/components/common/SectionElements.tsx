import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Header = styled.h2<{ color: string }>`
  margin: 0;
  font-size: 36px;
  color: ${({ color }) => color};
`;

const ContentBox = styled.div`
  padding: 60px 0 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10%;
`;

interface SectionHeaderProps extends PropsWithChildren {
  color: string;
}

export const SectionHeader = ({ color, children }: SectionHeaderProps) => {
  return <Header color={color}>{children}</Header>;
};

export const SectionContent = ({ children }: PropsWithChildren) => {
  return <ContentBox>{children}</ContentBox>;
};

export const TwoColumnsWrapper = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
