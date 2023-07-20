import { StyledLink } from './common';

import styled from 'styled-components';
import theme from '../theme';

import { socialData } from '../data/social';
import { SocialListItem } from './SocialListItem';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 70px;
  padding: 0 70px;
  color: ${theme.colors.textLight};
  background-color: ${theme.colors.bgDark};
  @media (max-width: 1440px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Copyright = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${theme.colors.textInactive};
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 997px) {
    gap: 8px;
  }
`;

export const Footer = () => {
  const socialIcons = socialData.map((item) => (
    <SocialListItem
      key={item.name}
      icon={item.icon}
      link={item.link}
      color={theme.colors.textLight}
    />
  ));

  return (
    <FooterContainer>
      <StyledLink
        color={theme.colors.textLight}
        to="https://github.com/Ilichhh/portfolio-website"
        target="_blank"
      >
        Source code
      </StyledLink>
      <Copyright>© 2023 Built and designed by Ilia Shakurov</Copyright>
      <SocialWrapper>{socialIcons}</SocialWrapper>
    </FooterContainer>
  );
};
