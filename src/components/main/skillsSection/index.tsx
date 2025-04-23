import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import { useEffect, useState } from "react";
import { skills } from "data/skills";

function SkillsSection() {
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });

  const handleSkillClick = (skillName: string) => {
    setActiveItems((prev) => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  return (
    <S.SkillsContainer>
      <S.SkillsTitle data-aos="fade-down">
        <span className="point">S</span>KILLS
      </S.SkillsTitle>
      <S.SkillsWrapper>
        <S.SkillCategory data-aos="fade-down" data-aos-delay="100">
          <S.CategoryTitle>LANGUAGE</S.CategoryTitle>
          <S.SkillsList>
            {skills.languages.map((skill) => (
              <S.SkillItem
                key={skill.name}
                onClick={() => handleSkillClick(skill.name)}
              >
                <div>
                  {skill.icon}
                  {skill.name}
                </div>
                {skill.level && (
                  <ul className={activeItems[skill.name] ? "active" : ""}>
                    {skill.level.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </S.SkillItem>
            ))}
          </S.SkillsList>
        </S.SkillCategory>

        <S.SkillCategory data-aos="fade-down" data-aos-delay="200">
          <S.CategoryTitle>FRONTEND</S.CategoryTitle>
          <S.SkillsList>
            {skills.frontend.map((skill) => (
              <S.SkillItem
                key={skill.name}
                onClick={() => handleSkillClick(skill.name)}
              >
                <div>
                  {skill.icon}
                  {skill.name}
                </div>
                {skill.level && (
                  <ul className={activeItems[skill.name] ? "active" : ""}>
                    {skill.level.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </S.SkillItem>
            ))}
          </S.SkillsList>
        </S.SkillCategory>

        <S.SkillCategory data-aos="fade-down" data-aos-delay="300">
          <S.CategoryTitle>TOOLS</S.CategoryTitle>
          <S.SkillsList>
            {skills.tools.map((skill) => (
              <S.SkillItem
                key={skill.name}
                onClick={() => handleSkillClick(skill.name)}
              >
                <div>
                  {skill.icon}
                  {skill.name}
                </div>
                {skill.level && (
                  <ul className={activeItems[skill.name] ? "active" : ""}>
                    {skill.level.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </S.SkillItem>
            ))}
          </S.SkillsList>
        </S.SkillCategory>
      </S.SkillsWrapper>
    </S.SkillsContainer>
  );
}

export default SkillsSection;
