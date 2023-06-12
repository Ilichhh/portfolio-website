import { Link } from 'react-router-dom';
import { Container } from '../common';

import styled from 'styled-components';
import theme from '../../theme';

const Section = styled.section`
  height: calc(100vh - 70px);
  background-color: ${theme.colors.bgDark};
`;

const Header = styled.h1`
  margin: 80px 0 20px;
  font-size: 48px;
  color: ${theme.colors.green};
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
  height: 40px;
  width: 100px;
  border: 1px solid ${theme.colors.important};
  border-radius: 4px;
  color: ${theme.colors.bgDark};
  background-color: ${theme.colors.important};
  cursor: pointer;
`;

const ButtonOutlined = styled(Button)`
  color: ${theme.colors.important};
  background-color: ${theme.colors.bgDark};
`;

export const HeroSection = () => {
  return (
    <Section>
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
          <ButtonOutlined to="mailto:shakurov.ia@gmail.com">Contact</ButtonOutlined>
        </ButtonsWrapper>
      </Container>
    </Section>
  );
};
