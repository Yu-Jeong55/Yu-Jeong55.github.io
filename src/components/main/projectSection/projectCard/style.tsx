import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 600px;
  flex: 0 0 auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: relative;
  filter: brightness(0.85) grayscale(0.2);
`;

export const ProjectContent = styled.div`
  flex: 1;
  padding: 40px 30px;
  margin-top: -70px;
  background-color: #ffffff;
  clip-path: polygon(0 16%, 100% 0, 100% 100%, 0 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const ProjectLogo = styled.div`
  font-size: ${FONT.SIZE.LARGE};
  color: ${PALETTE.MAIN.GRAY};
  margin-bottom: 40px;
  text-align: right;

  img {
    height: 50px;

    &[alt*="Pro.log"] {
      height: 30px;
    }
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${FONT.SIZE.BASIC};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const ProjectLink = styled.a<{ $isLink: boolean }>`
  display: flex;
  visibility: ${({ $isLink }) => ($isLink ? "inherit" : "hidden")};
  justify-content: space-between;
  align-items: center;
  width: calc(100% / 3 - 6px);
  padding: 3px 5px 3px 8px;
  background-color: #ffffff;
  font-size: ${FONT.SIZE.SMALL};
  border: 1px solid ${PALETTE.MAIN.DARK_GRAY};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: ${PALETTE.MAIN.POINT};
    border-color: ${PALETTE.MAIN.POINT};
  }
`;
