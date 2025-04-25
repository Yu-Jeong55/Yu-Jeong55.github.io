import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const ProjectDetailBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ProjectDetailContainer = styled.div`
  padding: 60px;
  h3,
  p,
  div,
  li,
  span,
  a {
    font-family: "Noto Sans KR", sans-serif;
  }
  ul {
    list-style-type: circle;
    list-style-position: inside;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 60px 0;
  text-align: center;

  h1 {
    font-family: GmarketSansMedium;
    color: #ffffff;
    letter-spacing: 2px;
  }
`;

export const PrologTitle = styled(Title)`
  background-color: #4a4777;
`;

export const TodayTitle = styled(Title)`
  background-color: #f97c80;
`;

export const NewstarTitle = styled(Title)`
  background-color: #aed37a;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: ${PALETTE.MAIN.GRAY};
    font-size: ${FONT.SIZE.SMALL};
    margin-bottom: 10px;
  }
`;

export const ProjectInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0 40px;

  li {
    margin-left: 10px;
  }

  .sub-list {
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 20px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  a {
    color: ${PALETTE.MAIN.BLACK};
    text-decoration: underline;
  }

  h4 {
    background-color: ${PALETTE.MAIN.LIGHT_GRAY};
    padding: 6px 16px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`;

export const InfoText = styled.span`
  color: #333;
`;

export const Skills = styled.div`
  display: flex;
  gap: 8px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  width: fit-content;
  color: white;
  font-size: ${FONT.SIZE.SMALL};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${PALETTE.MAIN.BLACK};
  border: 1px solid ${PALETTE.MAIN.BLACK};

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: ${PALETTE.MAIN.BLACK};
  }
`;

export const FigmaImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.img`
  height: 350px;
  width: fit-content;
  object-fit: contain;
`;
