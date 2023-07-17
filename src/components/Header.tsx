import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsAtTop } from '../hooks/useIsAtTop';

import { Burger } from './Burger';

import styled, { css } from 'styled-components';
import theme from '../theme';

const HeaderWrapper = styled.header<{ sticky: boolean }>`
  background-color: ${theme.colors.yellow};
  position: sticky;
  @media (max-width: 768px) {
    ${({ sticky }) =>
      sticky &&
      css`
        position: sticky;
        top: 0;
        z-index: 10;
        // border-bottom: 4px solid ${theme.colors.textDark};
      `}
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 70px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Nav = styled.nav`
  // @media (max-width: 768px) {
  //   position: absolute;
  //   flex-direction: column;
  // }
`;

const Menu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 0;
  list-style: none;
  font-size: 24px;
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 70px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 40px 20px;
    background-color: ${theme.colors.yellow};
    border-bottom: 4px solid ${theme.colors.textDark};
  }
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAtTop = useIsAtTop();

  const handleBurgerButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper sticky={!isAtTop}>
      <HeaderContainer>
        <Logo to="/">Ilia Shakurov</Logo>
        <Nav>
          <Menu isOpen={isMenuOpen}>
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
        <Burger isOpen={isMenuOpen} handleClick={handleBurgerButtonClick} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
