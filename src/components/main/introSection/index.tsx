import * as S from "./style";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function IntroSection() {
  return (
    <>
      <S.IntroContainer>
        <S.Overlay />
        <S.IntroTitle>
          <h2>HELLO,</h2>
          <h2>
            I'M <span className="point">YUJEONG</span>,
          </h2>
          <h2>WEB DEVELOPER</h2>
        </S.IntroTitle>
        <S.ScrollIndicator>
          <HiOutlineChevronDoubleDown />
        </S.ScrollIndicator>
      </S.IntroContainer>
      <S.IntroSpacer />
    </>
  );
}

export default IntroSection;
