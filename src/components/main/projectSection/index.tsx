import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import ProjectSlide from "./projectSlide";

interface ProjectType {
  title: string;
  logo: string;
  description: string;
  image: string;
  link: string;
}

function ProjectSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20
    });
  }, []);

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <>
      <S.ProjectContainer>
        <S.BlackBackground />
        <S.Title data-aos="fade-down">
          <span className="point">P</span>ROJECTS
        </S.Title>
        <ProjectSlide onProjectClick={handleProjectClick} />
      </S.ProjectContainer>
    </>
  );
}

export default ProjectSection;
