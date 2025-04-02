import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const SkillsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--top);
  padding-bottom: 280px;
  background-color: #ffffff;
  clip-path: polygon(0 16%, 100% 0, 100% 84%, 0 100%);
`;

export const SkillsTitle = styled.h2`
  text-align: center;
  font-size: ${FONT.SIZE.TITLE};
  margin-bottom: 56px;
  font-family: "gotham-black";

  span {
    font-family: "gotham-black";
  }
`;

export const SkillCategory = styled.div`
  width: 65%;
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 25px;
  height: 104px;

  @media (max-width: 1470px) {
    height: 160px;
  }
`;

export const CategoryTitle = styled.div`
  flex-shrink: 1;
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "gotham-bold";
  font-size: ${FONT.SIZE.LARGE};
  color: #ffffff;
  background-color: ${PALETTE.MAIN.POINT};
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  padding: 30px;
  height: 100%;
  width: 100%;
  background-color: ${PALETTE.MAIN.LIGHT_GRAY};
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  width: fit-content;
  color: white;
  font-size: ${FONT.SIZE.SMALL};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${PALETTE.MAIN.BLACK};
  border: 1px solid ${PALETTE.MAIN.BLACK};

  svg {
    width: 20px;
    height: 20px;
    color: ${PALETTE.MAIN.BLACK};
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${PALETTE.MAIN.GRAY};
  align-self: center;
`;
