import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const IntroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 70px;
  line-height: 1.1;
  margin-bottom: var(--bottom);
`;

export const IntroTitle = styled.h1<{ x?: number }>`
  font-size: ${FONT.SIZE.EXTRA};
  font-weight: ${FONT.WEIGHT.BOLD};
  letter-spacing: -2.5px;
  color: white;
  transition: transform 0.3s ease-out;
  transform: translateX(${(props) => props.x || 0}px);
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2.5s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${PALETTE.MAIN.LIGHT_GRAY};

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
