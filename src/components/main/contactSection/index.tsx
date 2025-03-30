import * as S from "./style";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

function ContactSection() {
  return (
    <S.ContactContainer>
      <S.ContactTitle>
        CONTACT <span className="point">ME</span>
      </S.ContactTitle>
      <S.ContactContent>
        <S.ContactInfo>
          <MdEmail />
          <span>kimyujung55@naver.com</span>
        </S.ContactInfo>
        <S.ContactInfo>
          <MdPhone />
          <span>010-7739-7504</span>
        </S.ContactInfo>
        <S.ContactInfo>
          <FaGithub />
          <a
            href="https://github.com/Yu-Jeong55"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Yu-Jeong55
          </a>
        </S.ContactInfo>
        <S.ContactInfo>
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
