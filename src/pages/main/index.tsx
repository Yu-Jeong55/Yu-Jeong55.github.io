import * as S from "./style";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import IntroSection from "components/main/introSection";
import AboutSection from "components/main/aboutSection";
import SkillsSection from "components/main/skillsSection";
import ContactSection from "components/main/contactSection";
import ProjectsSection from "components/main/projectSection";
import PrologDetail from "../projects/prolog";
import TodayDetail from "../projects/today";
import NewstarDetail from "../projects/newstar";

function MainPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const projectName = searchParams.get("p_name");

  const handleCloseModal = () => {
    setSearchParams({});
    navigate("/");
  };

  const getProjectLink = () => {
    switch (projectName?.toLowerCase()) {
      case "pro.log":
        return "https://github.com/Yu-Jeong55/Prolog";
      case "당일":
        return "https://github.com/Yu-Jeong55/today";
      case "뉴스타":
        return "https://github.com/Yu-Jeong55/newstar";
      default:
        return "";
    }
  };

  const renderProjectDetail = () => {
    switch (projectName?.toLowerCase()) {
      case "pro.log":
        return <PrologDetail />;
      case "당일":
        return <TodayDetail />;
      case "뉴스타":
        return <NewstarDetail />;
      default:
        return null;
    }
  };

  return (
    <S.MainContainer>
      <IntroSection />
      <S.InfoContainer>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </S.InfoContainer>
      {projectName && (
        <>
          <S.ModalOverlay onClick={handleCloseModal}>
            <S.ModalAndButtons>
              <S.ModalContent onClick={(e) => e.stopPropagation()}>
                {renderProjectDetail()}
              </S.ModalContent>
              <S.ButtonWrapper>
                <S.CloseButton onClick={handleCloseModal} />
                <a
                  href={getProjectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.GithubLink />
                </a>
                <a
                  href={getProjectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.GoPageLink />
                </a>
              </S.ButtonWrapper>
            </S.ModalAndButtons>
          </S.ModalOverlay>
        </>
      )}
    </S.MainContainer>
  );
}

export default MainPage;
