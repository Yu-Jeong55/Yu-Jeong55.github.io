import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";
import { SwiperSlide } from "swiper/react";

export const ProjectContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  padding-top: var(--top);
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

export const SliderContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  padding: 0 40px;
  z-index: 2;

  .swiper-slide {
    margin-right: 16px !important;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: transparent;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${PALETTE.MAIN.GRAY};

  &:hover {
    color: ${PALETTE.MAIN.POINT};
  }

  &.prev-button {
    left: -30px;
  }

  &.next-button {
    right: -30px;
  }

  svg {
    width: 60px;
    height: 60px;
  }
`;

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
  font-size: ${FONT.SIZE.SMALL};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const ProjectLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% / 3 - 6px);
  padding: 3px 5px 3px 8px;
  background-color: #ffffff;
  font-size: ${FONT.SIZE.SMALL};
  border: 1px solid ${PALETTE.MAIN.DARK_GRAY};
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: ${PALETTE.MAIN.POINT};
    border-color: ${PALETTE.MAIN.POINT};
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid ${PALETTE.MAIN.GRAY};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  opacity: 1;

  &:hover {
    background-color: ${PALETTE.MAIN.POINT};
    border-color: ${PALETTE.MAIN.POINT};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 10%;
  }

  &.next {
    right: 10%;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 10px;
`;
