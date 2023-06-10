import styled from 'styled-components';
import theme from '../theme';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 70px;
  background-color: ${theme.colors.bgDark};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/Ilichhh/portfolio-website">github</a>
    </FooterContainer>
  );
};
