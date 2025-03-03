import styled from "styled-components";
import { PALETTE } from "styles/Palette";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 220px;
  background-color: ${PALETTE.MAIN.DARK_GRAY};
`;
