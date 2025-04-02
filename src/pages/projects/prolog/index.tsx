import * as S from "../style";

import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiStyledcomponents
} from "react-icons/si";

function PrologDetail() {
  return (
    <>
      <S.PrologTitle>
        <h2>취업 준비를 한 곳에서 하는 ALL IN ONE 플랫폼 Pro.log</h2>
      </S.PrologTitle>
      <S.ProjectDetailContainer>
        <S.SubTitle>프로젝트 소개</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <S.InfoItem>
            <HiMiniComputerDesktop />
            <S.InfoText>웹서비스</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <FaRegCalendarAlt />
            <S.InfoText>2024.01 - 2024.02 (7주)</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <HiOutlineUsers />
            <S.InfoText>6명</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <FaRegBuilding />
            <S.InfoText>삼성 청년 SW 아카데미 공통 프로젝트</S.InfoText>
          </S.InfoItem>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            취업준비과정 Process과 기록을 한다는 Log의 합성어로 사회인으로서
            시작을 준비하는 취업준비생들을 위한 플랫폼
          </li>
          <li>
            채용공고 확인부터 서류, 테스트, 면접 전형까지 템플릿을 제공함으로써
            취업준비를 하나의 플랫폼에서 해결 할 수 있는 ALL IN ONE 플랫폼
          </li>
        </S.ProjectInfo>
        <S.SubTitle>사용스택</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <S.Skills>
            {SKILLS_PROPS.map((skill) => (
              <S.SkillItem key={skill.name}>
                {skill.icon}
                {skill.name}
              </S.SkillItem>
            ))}
          </S.Skills>
        </S.ProjectInfo>
        <S.SubTitle>주요기능</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>일정관리 탭 제공 ( 캘린더 뷰 / 칸반 뷰 )</li>
          <li>
            취업 프로세스 관리 탭 제공 - 4개 템플릿 (자기소개서, 테스트, 면접,
            빈 페이지) 중 사용자가 선택해 사용할 수 있도록 함
          </li>
          <li>전형별 사용자 합격률 통계 제공</li>
          <li>
            화상 채팅 기능 구현 - 함께 공부하는 스터디원과의 소통을 위해
            WebRTC를 활용한 화상 채팅 기능
          </li>
        </S.ProjectInfo>
        <S.SubTitle>담당역할</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            캘린더를 JavaScript로 직접 구현하고, 사람인 API로 받아온 채용 공고를
            캘린더에서 확인할 수 있도록 구현
          </li>
          <li>채용공고와 내 일정을 토글로 선택적으로 확인할 수 있도록 제공</li>
          <li>
            react-modal 활용 : 각 채용공고 클릭 시, 모달창에서 채용공고를
            확인하도록 구현
          </li>
          <li>각 전형별 템플릿(서류, 테스트, 면접, 빈페이지) 구현</li>
        </S.ProjectInfo>
      </S.ProjectDetailContainer>
    </>
  );
}

export default PrologDetail;

const SKILLS_PROPS = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    color: "#DB7093"
  }
];
