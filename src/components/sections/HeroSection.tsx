import { SectionWrapper, Container, LinkButton } from '../common';

import styled from 'styled-components';
import theme from '../../theme';

const Header = styled.h1`
  margin: 80px 0 20px;
  font-size: 48px;
  color: ${theme.colors.textDark};
`;

const Subheader = styled.h2`
  width: 50%;
  font-size: 24px;
  margin-bottom: 60px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const HeroSection = () => {
  return (
    <SectionWrapper bgColor={theme.colors.yellow} height="calc(100vh - 70px)">
      <Container>
        <Header>
          Hi,
          <br />
          I&apos;m Ilya,
          <br />
          Front End Developer
        </Header>
        <Subheader>I’m a design oriented software engineer. Experienced in blockchain.</Subheader>
        <ButtonsWrapper>
          <LinkButton color={theme.colors.green} to="/cv.pdf" target="_blank">
            CV
          </LinkButton>
          <LinkButton color={theme.colors.green} to="mailto:shakurov.ia@gmail.com">
            Contact
          </LinkButton>
        </ButtonsWrapper>
      </Container>
    </SectionWrapper>
  );
};
