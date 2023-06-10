import { Container, SectionHeader, SectionContent } from './common';

import theme from '../theme';

export const ContactSection = () => {
  return (
    <Container>
      <SectionHeader color={theme.colors.green}>{`<contact>`}</SectionHeader>
      <SectionContent></SectionContent>
      <SectionHeader color={theme.colors.green}>{`</contact>`}</SectionHeader>
    </Container>
  );
};
