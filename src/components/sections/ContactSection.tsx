import { SectionWrapper, Container, SectionHeader, SectionContent } from '../common';

import theme from '../../theme';

export const ContactSection = () => {
  return (
    <SectionWrapper bgColor={theme.colors.blue}>
      <Container>
        <SectionHeader>{`Just say hi`}</SectionHeader>
        <SectionContent></SectionContent>
      </Container>
    </SectionWrapper>
  );
};
