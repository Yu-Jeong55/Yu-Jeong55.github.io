import * as S from "./style";
import { forwardRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutSection = forwardRef<HTMLElement[]>((_, ref) => {
  return (
    <S.AboutContainer>
      <S.AboutTitle>
        ABOUT <span className="point">ME</span>
      </S.AboutTitle>
      <S.AboutGreet>WEB FRONTEND DEVELOPER</S.AboutGreet>
      <S.AboutImage>
        <img src="/images/my_photo.jpg" alt="profile_photo" />
      </S.AboutImage>
      <S.AboutDescription>
        <li>
          <span>1</span>
          효율적이고 간결하게 코드를 작성하는 것을 선호하는 프론트엔드
          개발자입니다.
        </li>
        <li>
          사용자에게 더 좋은 사용성과 경험을 제공하기 위해 항상 고민하며
          개발합니다.
          <span>2</span>
        </li>
        <li>
          <span>3</span>
          모든 경험에서 많은 것을 얻어가려 맡은 일은 열심히 노력하고, 그 다음
          경험에서는 더 발전된 모습을 보이기 위해 열심히 공부합니다.
        </li>
      </S.AboutDescription>
    </S.AboutContainer>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
