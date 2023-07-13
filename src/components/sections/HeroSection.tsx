import { SectionWrapper, Container, LinkButton } from '../common';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styled from 'styled-components';
import theme from '../../theme';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 60px;
  color: ${theme.colors.textDark};
`;

const Subheader = styled.h2`
  width: 48%;
  font-size: 24px;
  margin-bottom: 40px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

const LinkIcon = styled(OpenInNewIcon)`
  margin-left: 7px;
`;

const ArrowWrapper = styled.a`
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  transform: translateX(-50%);
`;

export const HeroSection = () => {
  return (
    <SectionWrapper id="hero" bgColor={theme.colors.yellow} height="calc(100vh - 70px)">
      <Container>
        <HeroWrapper>
          <Header>
            Hi!
            <br />
            I&apos;m Ilya,
            <br />
            Frontend Developer
          </Header>
          <Subheader>
            Passionate about the intersection of art and technology, I strive to create web
            applications that not only function well, but also engage and inspire users.
          </Subheader>
          <ButtonsWrapper>
            <LinkButton color={theme.colors.pink} to="/cv.pdf" target="_blank">
              CV
              <LinkIcon />
            </LinkButton>
            <LinkButton color={theme.colors.pink} to="mailto:shakurov.ia@gmail.com">
              Contact
            </LinkButton>
          </ButtonsWrapper>
          <ArrowWrapper href="#about">
            <span>about me</span>
            <KeyboardArrowDownIcon fontSize="large" />
          </ArrowWrapper>
        </HeroWrapper>
      </Container>
    </SectionWrapper>
  );
};
