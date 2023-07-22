import { useIsAtTop } from '../../hooks/useIsAtTop';

import { SectionWrapper, Container, LinkButton } from '../common';
import { OpenInNew, KeyboardArrowDown } from '@mui/icons-material';

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
  @media (max-width: 997px) {
    font-size: 48px;
  }
`;

const Subheader = styled.h2`
  width: 70%;
  max-width: 674px;
  font-size: 24px;
  margin-bottom: 40px;
  @media (max-width: 997px) {
    width: 85%;
    font-size: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

const LinkIcon = styled(OpenInNew)`
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
  const isAtTop = useIsAtTop();

  return (
    <SectionWrapper id="hero" bgColor={theme.colors.yellow} height="calc(100vh - 70px)" border>
      <Container>
        <HeroWrapper>
          <Header>
            Hi!
            <br />
            I&apos;m Ilia,
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
          {isAtTop && (
            <ArrowWrapper href="#about">
              <KeyboardArrowDown fontSize="large" />
            </ArrowWrapper>
          )}
        </HeroWrapper>
      </Container>
    </SectionWrapper>
  );
};
