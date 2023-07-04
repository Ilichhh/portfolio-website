import styled from 'styled-components';
import theme from '../theme';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 70px;
  background-color: ${theme.colors.bgLight};
  border-bottom: 4px solid ${theme.colors.textDark};
  transition: all 0.3s ease-in-out;
`;

const Nav = styled.nav`
  width: 40%;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 24px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <a href="#">Ilya Shakurov</a>
      <Nav>
        <Menu>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
};
