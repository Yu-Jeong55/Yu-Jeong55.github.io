import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import "swiper/css/navigation";
import { useEffect } from "react";

import ProjectSlide from "./projectSlide";

function ProjectSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20
    });
  }, []);

  return (
    <>
      <S.ProjectContainer>
        <S.BlackBackground />
        <S.Title data-aos="fade-down">
          <span className="point">P</span>ROJECTS
        </S.Title>
        <ProjectSlide />
      </S.ProjectContainer>
    </>
  );
}

export default ProjectSection;
