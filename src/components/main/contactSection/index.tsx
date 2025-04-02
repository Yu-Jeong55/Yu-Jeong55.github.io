import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./style";
import { useEffect } from "react";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20,
    });
  }, []);

  return (
    <S.ContactContainer>
      <S.ContactTitle data-aos="fade-down" data-aos-delay="100">
        CONTACT <span className="point">ME</span>
      </S.ContactTitle>
      <S.ContactContent>
        <S.ContactInfo data-aos="fade-down" data-aos-delay="200">
          <MdEmail />
          <span>kimyujung55@naver.com</span>
        </S.ContactInfo>
        <S.ContactInfo data-aos="fade-down" data-aos-delay="300">
          <MdPhone />
          <span>010-7739-7504</span>
        </S.ContactInfo>
        <S.ContactInfo data-aos="fade-down" data-aos-delay="400">
          <FaGithub />
          <a
            href="https://github.com/Yu-Jeong55"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Yu-Jeong55
          </a>
        </S.ContactInfo>
        <S.ContactInfo data-aos="fade-down" data-aos-delay="500">
          <SiVelog />
          <a
            href="https://velog.io/@potato55"
            target="_blank"
            rel="noopener noreferrer"
          >
            velog.io/@potato55
          </a>
        </S.ContactInfo>
      </S.ContactContent>
    </S.ContactContainer>
  );
}

export default ContactSection;
