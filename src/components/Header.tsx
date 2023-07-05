import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../theme';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 70px;
  background-color: ${theme.colors.purple};
  border-bottom: 4px solid ${theme.colors.textDark};
  transition: all 0.3s ease-in-out;
`;

const Nav = styled.nav`
  width: 30%;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 24px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: 500;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">Ilya Shakurov</Logo>
      <Nav>
        <Menu>
          <li>
            <NavLink href="#about">about</NavLink>
          </li>
          <li>
            <NavLink href="#projects">projects</NavLink>
          </li>
          <li>
            <NavLink href="#contact">contact</NavLink>
          </li>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
};
