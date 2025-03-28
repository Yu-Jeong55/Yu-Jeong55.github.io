import * as S from "./style";
import { useEffect, useState } from "react";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

interface NavItem {
  idx: number;
  name: string;
}

interface NavigationProps {
  scrollRef: React.RefObject<(HTMLElement | null)[]>;
}

export default function Navigation({ scrollRef }: NavigationProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNavClick = (index: number) => {
    if (scrollRef.current && scrollRef.current[index]) {
      scrollRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    function handleScroll() {
      if (scrollRef.current) {
        // 첫 번째 섹션(About)의 위치를 기준으로 체크
        const firstSection = scrollRef.current[1];
        if (firstSection && window.scrollY < firstSection.offsetTop - 180) {
          setActiveIndex(0);
          console.log("activeIndex", activeIndex);
          return;
        }

        scrollRef.current.forEach((ref, index) => {
          if (ref && ref.offsetTop - 180 < window.scrollY) {
            setActiveIndex(index);
          }
        });
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <S.Nav>
      <S.Logo
        onClick={() => {
          window.scrollTo(0, 0);
          setActiveIndex(null);
        }}
      >
        <img src="./yujeong-logo.png" alt="logo" />
      </S.Logo>
      <S.Description>frontend developer</S.Description>
      <S.NavList>
        {NAV_ITEMS.map((item) => (
          <S.NavItem
            key={item.idx}
            $isActive={activeIndex === item.idx}
            onClick={() => handleNavClick(item.idx)}
          >
            {item.name}
          </S.NavItem>
        ))}
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

const NAV_ITEMS: NavItem[] = [
  { idx: 1, name: "About" },
  { idx: 2, name: "My Skills" },
  { idx: 3, name: "Projects" },
];
