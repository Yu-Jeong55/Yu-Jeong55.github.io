import * as S from "./style";
import AboutSection from "components/main/aboutSection";
import IntroSection from "components/main/introSection";
import ProjectsSection from "components/main/projectSection";
import SkillsSection from "components/main/skillsSection";
import { useEffect } from "react";

function MainPage({ ref }: { ref: React.RefObject<HTMLElement[]> }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.MainContainer>
      <IntroSection />
      <S.InfoContainer>
        <AboutSection ref={ref} />
        <SkillsSection ref={ref} />
        <ProjectsSection ref={ref} />
      </S.InfoContainer>
    </S.MainContainer>
  );
}

export default MainPage;
