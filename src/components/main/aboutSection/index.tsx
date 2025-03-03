import * as S from "./style";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function AboutSection() {
  return (
    <S.AboutContainer id="about">
      <S.AboutTitle>About Me</S.AboutTitle>
      <S.AboutImage>
        <img src="img.png" alt="img" />
      </S.AboutImage>
      <S.AboutInfo>1999.08.28</S.AboutInfo>
      <S.AboutGreet>
        안녕하세요, 프론트엔드 개발자 김유정입니다. <br /> 제 포트폴리오 웹
        사이트에 방문해주셔서 감사합니다.
      </S.AboutGreet>
      <S.AboutDescription>
        <li>
          <IoMdCheckmarkCircleOutline />
          효율적이고 간결하게 코드를 작성하는 것을 선호하는 프론트엔드
          개발자입니다.
        </li>
        <li>
          <IoMdCheckmarkCircleOutline />
          사용자에게 더 좋은 사용성과 경험을 제공하기 위해 항상 고민하며
          개발합니다.
        </li>
        <li>
          <IoMdCheckmarkCircleOutline />
          모든 경험에서 많은 것을 얻어가려 맡은 일은 열심히 노력하고, 그 다음
          경험에서는 더 발전된 모습을 보이기 위해 열심히 공부합니다.
        </li>
      </S.AboutDescription>
    </S.AboutContainer>
  );
}
