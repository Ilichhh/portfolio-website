import { Container, SectionDark, SectionHeader, SectionContent } from './common';

import theme from '../theme';

export const ProjectsSection = () => {
  return (
    <SectionDark>
      <Container>
        <SectionHeader color={theme.colors.red}>{`<projects>`}</SectionHeader>
        <SectionContent></SectionContent>
        <SectionHeader color={theme.colors.red}>{`</projects>`}</SectionHeader>
      </Container>
    </SectionDark>
  );
};
