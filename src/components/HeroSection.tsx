import { Container } from './common';

import styled from 'styled-components';
import theme from '../theme';

const Section = styled.section`
  height: 100vh;
  background-color: ${theme.colors.bgDark};
`;

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <h1>
          Hi,
          <br />
          I&apos;m Ilya,
          <br />
          Front End Developer
        </h1>
        <h2>I’m a design oriented software engineer. Experienced in blockchain.</h2>
        <button>HIRE ME!</button>
      </Container>
    </Section>
  );
};
