import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const SkillsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: var(--top);
  margin-bottom: var(--bottom);
`;

export const SkillsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${FONT.SIZE.TITLE};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${PALETTE.MAIN.LIGHT_GRAY};
`;

export const SkillCategory = styled.div`
  display: flex;
  gap: 50px;
  border: 1px solid ${PALETTE.MAIN.GRAY};
  border-radius: 10px;
  padding: 30px 40px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
`;

export const CategoryTitle = styled.h3`
  font-size: ${FONT.SIZE.SUB_TITLE};
  color: ${PALETTE.MAIN.GRAY};
  width: 180px;
  text-align: center;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  width: fit-content;
  color: white;
  border-radius: 5px;
  border: 1px solid ${PALETTE.MAIN.GRAY};
  background-color: rgba(0, 0, 0, 0.5);

  svg {
    width: 20px;
    height: 20px;
    color: ${PALETTE.MAIN.POINT};
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${PALETTE.MAIN.GRAY};
  align-self: center;
`;
