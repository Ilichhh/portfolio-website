import { PropsWithChildren } from 'react';

import styled from 'styled-components';
import theme from '../../theme';

const StyledSection = styled.section`
  background-color: ${theme.colors.bgDark};
`;

export const SectionDark = ({ children }: PropsWithChildren) => {
  return <StyledSection>{children}</StyledSection>;
};
