import styled, { css } from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 220px;
  background-color: ${PALETTE.MAIN.BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  width: 180px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Description = styled.p`
  color: ${PALETTE.MAIN.GRAY};
`;

export const NavList = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavItem = styled.li<{ $isActive: boolean }>`
  font-size: 20px;
  font-weight: ${FONT.WEIGHT.BASIC};
  cursor: pointer;
  transition: color 0.3s ease;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${PALETTE.MAIN.GRAY};
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${PALETTE.MAIN.POINT};
      font-weight: bold;
      // ... active 상태일 때 적용할 다른 스타일들 ...
    `}
  &:hover {
    color: ${PALETTE.MAIN.POINT};
  }
`;

export const SocialLinks = styled.div`
  margin-top: auto;
  display: flex;
  gap: 15px;

  svg {
    height: 23px;
    width: 23px;
  }

  a {
    color: ${PALETTE.MAIN.GRAY};
    font-size: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: ${PALETTE.MAIN.POINT};
    }
  }
`;
