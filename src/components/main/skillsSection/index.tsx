import * as S from "./style";
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

export default function SkillsSection() {
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
    <S.SkillsContainer id="skills">
      <S.SkillsTitle>Skills</S.SkillsTitle>
      <S.SkillCategory>
        <S.CategoryTitle>LANGUAGE</S.CategoryTitle>
        <S.Divider />
        <S.SkillsList>
          {skills.languages.map((skill) => (
            <S.SkillItem key={skill.name}>
              {skill.icon}
              {skill.name}
            </S.SkillItem>
          ))}
        </S.SkillsList>
      </S.SkillCategory>

      <S.SkillCategory>
        <S.CategoryTitle>FRONTEND</S.CategoryTitle>
        <S.Divider />
        <S.SkillsList>
          {skills.frontend.map((skill) => (
            <S.SkillItem key={skill.name}>
              {skill.icon}
              {skill.name}
            </S.SkillItem>
          ))}
        </S.SkillsList>
      </S.SkillCategory>

      <S.SkillCategory>
        <S.CategoryTitle>TOOLS</S.CategoryTitle>
        <S.Divider />
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
