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

export const SkillsWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 60%;
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
  display: flex;
  flex-direction: column;
  width: calc((100% - 40px) / 3);
  gap: 12px;
  margin-bottom: 25px;
`;

export const CategoryTitle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "gotham-bold";
  font-size: ${FONT.SIZE.LARGE};
  color: #ffffff;
  background-color: ${PALETTE.MAIN.BLACK};
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  width: 100%;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${PALETTE.MAIN.LIGHT_GRAY};

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: #ffffff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 12px;
    height: 56px;
    transition: all 0.3s ease;
    font-weight: ${FONT.WEIGHT.BOLD};
    background-color: ${PALETTE.MAIN.POINT};
    color: #ffffff;
    &:hover {
      transform: translateY(-3px);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 20px;
    padding-right: 16px;
    padding-bottom: 16px;
    background-color: ${PALETTE.MAIN.LIGHT_GRAY};
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
    overflow: hidden;
    transition: all 0.6s ease-out;
    list-style-type: circle;
    list-style-position: inside;

    &.active {
      max-height: 500px;
      padding-top: 16px;
      padding-bottom: 16px;
      opacity: 1;
    }

    li {
      font-family: "Noto Sans KR", sans-serif;
    }
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${PALETTE.MAIN.GRAY};
  align-self: center;
`;
