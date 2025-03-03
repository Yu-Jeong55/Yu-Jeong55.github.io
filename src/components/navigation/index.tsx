import * as S from "./style";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Navigation() {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <S.Nav>
      <S.Logo onClick={() => window.scrollTo(0, 0)}>
        <img src="./yujeong-logo.png" alt="logo" />
      </S.Logo>
      <S.Description>frontend developer</S.Description>
      <S.NavList>
        <S.NavItem onClick={() => scrollToSection("about")}>About</S.NavItem>
        <S.NavItem onClick={() => scrollToSection("skills")}>
          My Skills
        </S.NavItem>
        <S.NavItem onClick={() => scrollToSection("projects")}>
          Projects
        </S.NavItem>
      </S.NavList>

      <S.SocialLinks>
        <a
          href="https://github.com/Yu-Jeong55"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://velog.io/@potato55/posts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVelog />
        </a>
      </S.SocialLinks>
    </S.Nav>
  );
}
