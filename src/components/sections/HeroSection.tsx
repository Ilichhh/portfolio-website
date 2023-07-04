import { Link } from 'react-router-dom';
import { SectionWrapper, Container } from '../common';

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

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 120px;
  border: 4px solid ${theme.colors.textDark};
  color: ${theme.colors.textDark};
  background-color: ${theme.colors.green};
  box-shadow: 8px 8px ${theme.colors.textDark};
  cursor: pointer;
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
          <Button to="/cv.pdf" target="_blank">
            CV
          </Button>
          <Button to="mailto:shakurov.ia@gmail.com">Contact</Button>
        </ButtonsWrapper>
      </Container>
    </SectionWrapper>
  );
};
