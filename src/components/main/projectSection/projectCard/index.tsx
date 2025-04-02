import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { SlArrowRight } from "react-icons/sl";

interface ProjectType {
  title: string;
  logo: string;
  description: string;
  image: string;
  link: string;
}

function ProjectCard({ project }: { project: ProjectType }) {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`?p_name=${project.title}`);
  };

  return (
    <S.ProjectCard data-aos="flip-left" data-aos-delay="200">
      <S.ProjectImage src={project.image} alt={project.title} />
      <S.ProjectContent>
        <S.ProjectLogo>
          <img src={project.logo} alt={project.title} />
        </S.ProjectLogo>
        <S.ProjectDescription>{project.description}</S.ProjectDescription>
        <S.ProjectLinks>
          <S.ProjectLink onClick={handleDetailClick}>
            DETAIL
            <SlArrowRight size={10} />
          </S.ProjectLink>
          <S.ProjectLink
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
            <SlArrowRight size={10} />
          </S.ProjectLink>
          <S.ProjectLink
            // href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            WEBSITE
            <SlArrowRight size={10} />
          </S.ProjectLink>
        </S.ProjectLinks>
      </S.ProjectContent>
    </S.ProjectCard>
  );
}

export default ProjectCard;
