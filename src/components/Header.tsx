import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../theme';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 70px;
  background-color: ${theme.colors.yellow};
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

const MenuItem = styled.li`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 12px;
    background-color: ${theme.colors.blue};
    transition: 0.2s all;
  }
  &:hover {
    &:before {
      width: 0;
    }
  }
`;

const NavLink = styled.a`
  position: relative;
  z-index: 10;
  text-decoration: none;
  font-weight: 500;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">Ilya Shakurov</Logo>
      <Nav>
        <Menu>
          <MenuItem>
            <NavLink href="#about">about</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#projects">projects</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#contact">contact</NavLink>
          </MenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
};
