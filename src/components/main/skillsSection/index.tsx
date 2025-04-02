import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import { useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiStyledcomponents,
  SiGithub,
  SiJira,
  SiNotion,
  SiGitlab,
  SiFigma,
  SiReactquery,
} from "react-icons/si";

function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const skills = {
    languages: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    ],
    frontend: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "React Query", icon: <SiReactquery />, color: "#FF4154" },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents />,
        color: "#DB7093",
      },
    ],
    tools: [
      { name: "Jira", icon: <SiJira />, color: "#0052CC" },
      { name: "Notion", icon: <SiNotion />, color: "#ffffff" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "GitLab", icon: <SiGitlab />, color: "#FCA121" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
  };

  return (
    <S.SkillsContainer>
      <S.SkillsTitle data-aos="fade-down">
        <span className="point">S</span>KILLS
      </S.SkillsTitle>
      <S.SkillCategory data-aos="fade-down" data-aos-delay="300">
        <S.CategoryTitle>LANGUAGE</S.CategoryTitle>
        <S.SkillsList>
          {skills.languages.map((skill) => (
            <S.SkillItem key={skill.name}>
              {skill.icon}
              {skill.name}
            </S.SkillItem>
          ))}
        </S.SkillsList>
      </S.SkillCategory>

      <S.SkillCategory data-aos="fade-down" data-aos-delay="400">
        <S.CategoryTitle>FRONTEND</S.CategoryTitle>
        <S.SkillsList>
          {skills.frontend.map((skill) => (
            <S.SkillItem key={skill.name}>
              {skill.icon}
              {skill.name}
            </S.SkillItem>
          ))}
        </S.SkillsList>
      </S.SkillCategory>

      <S.SkillCategory data-aos="fade-down" data-aos-delay="500">
        <S.CategoryTitle>TOOLS</S.CategoryTitle>
        <S.SkillsList>
          {skills.tools.map((skill) => (
            <S.SkillItem key={skill.name}>
              {skill.icon}
              {skill.name}
            </S.SkillItem>
          ))}
        </S.SkillsList>
      </S.SkillCategory>
    </S.SkillsContainer>
  );
}

export default SkillsSection;
