import styled from "styled-components";
import { PALETTE } from "styles/Palette";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 1000px;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${PALETTE.MAIN.LIGHT_GRAY};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 5;
  background-color: #f9f7f7;
  padding-top: 160px;
  padding-bottom: 300px;

  position: relative;
  clip-path: polygon(0 3.5%, 100% 0, 100% 100%, 0 100%);
`;
