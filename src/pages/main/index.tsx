import * as S from "./style";
import { useEffect } from "react";
import IntroSection from "components/main/introSection";
import AboutSection from "components/main/aboutSection";
import SkillsSection from "components/main/skillsSection";
import ContactSection from "components/main/contactSection";
import ProjectsSection from "components/main/projectSection";

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.MainContainer>
      <IntroSection />
      <S.InfoContainer>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </S.InfoContainer>
    </S.MainContainer>
  );
}

export default MainPage;
