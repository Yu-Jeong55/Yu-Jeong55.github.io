import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { PALETTE } from "styles/Palette";

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
