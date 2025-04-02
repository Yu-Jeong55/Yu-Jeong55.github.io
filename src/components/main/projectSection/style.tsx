import { FONT } from "styles/Palette";
import styled from "styled-components";

export const ProjectContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 60px;
  padding-bottom: 350px;
  clip-path: polygon(0 4%, 100% 0, 100% 100%, 0 100%);
`;

export const BlackBackground = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("/images/laptop.jpg");
  position: absolute;
  top: 55%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.7);
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${FONT.SIZE.TITLE};
  font-family: "gotham-black";
  margin-bottom: 56px;
  position: relative;
  z-index: 2;

  span {
    font-family: "gotham-black";
  }
`;
