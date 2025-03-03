import * as S from "./style";
import AboutSection from "components/main/aboutSection";
import IntroSection from "components/main/introSection";
import ProjectsSection from "components/main/projectSection";
import SkillsSection from "components/main/skillsSection";
import { useEffect } from "react";

const MainPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.MainContainer>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </S.MainContainer>
  );
};

export default MainPage;
