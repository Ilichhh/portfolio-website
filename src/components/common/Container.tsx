import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 20px 60px;
`;

export const Container = ({ children }: PropsWithChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};
