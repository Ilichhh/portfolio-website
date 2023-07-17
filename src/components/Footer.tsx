import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../theme';

import { socialData } from '../data/social';
import { SocialListItem } from './SocialListItem';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 70px;
  color: ${theme.colors.textLight};
  background-color: ${theme.colors.bgDark};
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.textLight};
`;

const Year = styled.span`
  font-weight: 500;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
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
      <FooterLink to="https://github.com/Ilichhh/portfolio-website" target="_blank">
        Code
      </FooterLink>
      <Year>© 2023</Year>
      <SocialWrapper>{socialIcons}</SocialWrapper>
    </FooterContainer>
  );
};
