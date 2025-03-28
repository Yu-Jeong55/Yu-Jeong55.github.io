import styled from "styled-components";
import { FONT } from "styles/Palette";

export const IntroContainer = styled.section`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  min-width: 1000px;

  background-image: url("/images/laptop.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1920/1080;

  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const IntroTitle = styled.div`
  position: relative;
  z-index: 2;
  left: 7%;
  top: 15%;
  width: 100%;

  span {
    font-family: "gotham-black";
  }

  h2 {
    font-size: ${FONT.SIZE.INTRO};
    font-family: "gotham-black";
    color: white;
    text-align: left;
    text-shadow: -8px 8px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const IntroSpacer = styled.div`
  width: 100%;
  aspect-ratio: 1920/700;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 28%;
  left: 8.5%;
  transform: translateX(-50%);
  animation: bounce 2.5s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  z-index: 4;

  svg {
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;
