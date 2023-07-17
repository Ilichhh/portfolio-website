import styled, { css } from 'styled-components';
import theme from '../theme';

const BurgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 38px;
  height: 38px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerLine = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 4px;
  background: ${theme.colors.textDark};
  transition: transform 0.2s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(45deg) translate(9px, 9px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(9px, -9px);
      }
    `}
`;

interface BurgerProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const Burger = ({ isOpen, handleClick }: BurgerProps) => {
  return (
    <BurgerButton onClick={handleClick}>
      <BurgerLine isOpen={isOpen} />
      <BurgerLine isOpen={isOpen} />
      <BurgerLine isOpen={isOpen} />
    </BurgerButton>
  );
};
