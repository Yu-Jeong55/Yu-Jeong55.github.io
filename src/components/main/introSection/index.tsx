import * as S from "./style";
import { useState, useEffect } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function IntroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateOffset = () => {
    const maxScroll = 500; // 최대 이동 거리 (픽셀)
    const offset = (scrollY / window.innerHeight) * maxScroll;
    return Math.min(offset, maxScroll);
  };

  return (
    <S.IntroContainer>
      <S.IntroTitle x={calculateOffset()}>Hello,</S.IntroTitle>
      <S.IntroTitle x={-calculateOffset()}>I'm YuJeong,</S.IntroTitle>
      <S.IntroTitle x={calculateOffset()}>Frontend developer</S.IntroTitle>
      <S.ScrollIndicator>
        <p>scroll down</p>
        <HiOutlineChevronDoubleDown />
      </S.ScrollIndicator>
    </S.IntroContainer>
  );
}
