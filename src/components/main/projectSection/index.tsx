import "swiper/css";
import "swiper/css/navigation";
import * as S from "./style";
import { forwardRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";

const ProjectSection = forwardRef<HTMLElement[]>((_, ref) => {
  const projects = [
    {
      title: "Pro.log",
      logo: "/logos/Pro.log.svg",
      description:
        "더 복잡해지고 늘어만 가는 취업의 단계들을 알맞는 템플릿을 사용해 기록하고 나의 채용 일정을 관리하는 서비스입니다.",
      image: "/images/prolog-preview.webp",
      link: "https://github.com/Yu-Jeong55/Prolog",
    },
    {
      title: "뉴스타",
      logo: "/logos/newstar-logo.png",
      description:
        "글 보다 영상이 더 익숙한 MZ세대의 문해력이 이슈가 되는 시대에 뉴스 숏폼 플랫폼으로 이를 해결하고자 하였습니다.",
      image: "/images/newstar-preview.webp",
      link: "https://github.com/yourusername/project1",
    },
    {
      title: "당일",
      logo: "/logos/today-logo.webp",
      description:
        "갓생살기가 유행하고 있는 지금, 하루를 알차게 채우는데 도움을 주는 그림 일기 제작 플랫폼입니다.",
      image: "/images/today-preview.webp",
      link: "https://github.com/yourusername/project1",
    },
  ];

  return (
    <S.ProjectContainer>
      <S.BlackBackground />
      <S.Title>
        <span className="point">P</span>ROJECTS
      </S.Title>
      <S.SliderContainer>
        <S.SliderButton className="prev-button" aria-label="이전 프로젝트">
          <RiArrowLeftWideFill />
        </S.SliderButton>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
        >
          {projects.map((project, index) => (
            <S.StyledSwiperSlide key={index}>
              <S.ProjectCard>
                <S.ProjectImage src={project.image} alt={project.title} />
                <S.ProjectContent>
                  <S.ProjectLogo>
                    <img src={project.logo} alt={project.title} />
                  </S.ProjectLogo>
                  <S.ProjectDescription>
                    {project.description}
                  </S.ProjectDescription>
                  <S.ProjectLinks>
                    <S.ProjectLink
                      // href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            </S.StyledSwiperSlide>
          ))}
        </Swiper>
        <S.SliderButton className="next-button" aria-label="다음 프로젝트">
          <RiArrowRightWideFill />
        </S.SliderButton>
      </S.SliderContainer>
    </S.ProjectContainer>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
