import { Header, Footer } from '../components';
import { Container, SectionHeader, SectionContent } from '../components/common';

import theme from '../theme';

export const GraphiqlCaseStudyPage = () => {
  return (
    <>
      <Header />
      <Container>
        <SectionHeader color={theme.colors.green}>{`<graphiql case study>`}</SectionHeader>
        <SectionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos ratione fugit!
          Vitae labore neque ab ipsam porro fugiat nostrum consequatur nisi iure, laboriosam amet
          accusamus quas maiores officia ea!
        </SectionContent>
        <SectionHeader color={theme.colors.green}>{`</graphiql case study>`}</SectionHeader>
      </Container>
      <Footer />
    </>
  );
};
