import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import { useEffect } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function IntroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <S.IntroContainer>
        <S.Overlay />
        <S.IntroTitle>
          <h2 data-aos="flip-down" data-aos-delay="100">
            HELLO,
          </h2>
          <h2 data-aos="flip-down" data-aos-delay="400">
            I'M <span className="point">YUJEONG</span>,
          </h2>
          <h2 data-aos="flip-down" data-aos-delay="700">
            WEB DEVELOPER
          </h2>
        </S.IntroTitle>
        <S.ScrollIndicator data-aos="fade-down" data-aos-delay="800">
          <HiOutlineChevronDoubleDown />
        </S.ScrollIndicator>
      </S.IntroContainer>
      <S.IntroSpacer />
    </>
  );
}

export default IntroSection;
