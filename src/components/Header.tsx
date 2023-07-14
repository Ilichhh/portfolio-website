import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../theme';

const HeaderWrapper = styled.header`
  background-color: ${theme.colors.yellow};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
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
  position: relative;
  height: 70px;
  padding: 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  background-color: ${theme.colors.bgDark};
  color: ${theme.colors.textLight};
  transition: 0.2s all;
  &:before {
    content: '';
    position: absolute;
    bottom: 22px;
    left: 50%;
    width: 84%;
    height: 2px;
    background-color: ${theme.colors.textLight};
    transform: translateX(-50%);
    transition: 0.2s all;
  }
  &:hover {
    color: ${theme.colors.pink};
    &:before {
      background-color: ${theme.colors.pink};
    }
  }
`;

const MenuItem = styled.li`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.textDark};
    transition: 0.2s all ease-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

const NavLink = styled.a`
  position: relative;
  z-index: 10;
  text-decoration: none;
  font-weight: 600;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">Ilia Shakurov</Logo>
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
    </HeaderWrapper>
  );
};
