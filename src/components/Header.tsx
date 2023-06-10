import { useIsAtTop } from '../hooks/useIsAtTop';

import styled, { css } from 'styled-components';
import theme from '../theme';

const HeaderContainer = styled.header<{ sticky: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 70px;
  background-color: ${theme.colors.bgDark};
  transition: all 0.3s ease-in-out;
  ${({ sticky }) =>
    sticky &&
    css`
      z-index: 999;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    `}
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
  const isAtTop = useIsAtTop();

  return (
    <HeaderContainer sticky={!isAtTop}>
      <a href="#">[I.S.]</a>
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
