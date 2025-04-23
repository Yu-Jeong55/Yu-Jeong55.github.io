import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import { useEffect } from "react";

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20
    });
  }, []);

  return (
    <S.AboutContainer>
      <S.AboutTitle data-aos="fade-down" data-aos-delay="50">
        ABOUT <span className="point">ME</span>
      </S.AboutTitle>
      <S.AboutGreet data-aos="fade-down" data-aos-delay="100">
        WEB FRONTEND DEVELOPER
      </S.AboutGreet>
      <S.AboutThank data-aos="fade-down" data-aos-delay="100">
        안녕하세요! 프론트엔드 개발자 김유정입니다.
      </S.AboutThank>
      <S.AboutThank data-aos="fade-down" data-aos-delay="100">
        제 사이트에 방문해주셔서 감사합니다.
      </S.AboutThank>
      <br />
      <br />
      <S.AboutImage data-aos="zoom-in" data-aos-delay="200">
        <img src="/images/my_photo.jpg" alt="profile_photo" />
      </S.AboutImage>
      <S.AboutDescription>
        <li data-aos="fade-down" data-aos-delay="300">
          <span>1</span>
          효율적이고 간결하게 코드를 작성하는 것을 선호하는 프론트엔드
          개발자입니다.
        </li>
        <li data-aos="fade-down" data-aos-delay="400">
          사용자에게 더 좋은 사용성과 경험을 제공하기 위해 항상 고민하며
          개발합니다.
          <span>2</span>
        </li>
        <li data-aos="fade-down" data-aos-delay="500">
          <span>3</span>
          모든 경험에서 많은 것을 얻어가려 맡은 일은 열심히 노력하고, 그 다음
          경험에서는 더 발전된 모습을 보이기 위해 열심히 공부합니다.
        </li>
      </S.AboutDescription>
    </S.AboutContainer>
  );
}

export default AboutSection;
