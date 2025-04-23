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
        <h1>취업 준비를 한 곳에서 하는 ALL IN ONE 플랫폼 Pro.log</h1>
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
        <S.SubTitle>프로젝트 기획의도</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            채용절차가 더 복잡해져감으로써 취업 준비 과정을 기록하고 관리할
            필요성이 생겨났습니다.
            <li>채용 공고 확인 : 사람인, 잡코리아, 자소설닷컴 등</li>
            <li>채용 일정 및 절차 기록 : 노션, 엑셀, 캘린더 애플리케이션 등</li>
            <li>취업 스터디 등 진행 : 구글미트, 줌 등</li>
          </li>
          <li>
            위 과정을 모두 한 곳에서 할 수 있도록 하는 ALL IN ONE 취업 준비
            플랫폼을 기획했습니다.
          </li>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            취업준비과정 Process와 기록을 한다는 Log의 합성어로 사회인으로서
            시작을 준비 (prologue) 하는 취업준비생들을 위한 플랫폼
          </li>
          <li>
            서류, 테스트, 면접 전형까지 채용 절차별 템플릿을 제공함으로써 취업
            준비 과정을 손쉽게 기록하고 확인할 수 있는 플랫폼
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
        <S.SubTitle>핵심기능</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>일정 관리 탭 제공 ( 캘린더 뷰 / 칸반 뷰 )</li>
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
          <h4>프론트엔드</h4>
          <h4>기여도 18%</h4>
          <li>
            프론트엔드 팀장으로서 Figma 를 이용한 화면 설계 시 프론트엔드
            팀원들과 협업하여 프로젝트 진행
          </li>
          <h4>구현 기능</h4>
          <li>
            커스텀 캘린더 생성 및 사람인 API로 받아온 채용 공고를 캘린더에서
            확인할 수 있도록 구현
          </li>
          <li>채용공고와 내 일정을 토글로 선택적으로 확인할 수 있도록 제공</li>
          <li>
            react-modal 활용 : 각 채용공고 클릭 시, 모달창에서 채용공고를
            확인하도록 구현
          </li>
          <li>각 전형별 템플릿(서류, 테스트, 면접, 빈페이지) 구현</li>
        </S.ProjectInfo>
        <S.SubTitle>트러블슈팅</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <h4>일정 관리의 중요성 간과</h4>
          <li>
            문제점 : 첫 프로젝트였기에 일정 관리의 중요성을 간과하고 구현에만
            집중하다 보니 프로젝트 초반 일정이 조금씩 밀리는 현상 발생
          </li>
          <li>
            해결점 : Jira를 적극 활용해 팀원 모두가 1주를 스프린트 단위로 계획을
            설계하고 프로젝트 진행, 또 매일 아침 10분 스크럼을 통해 프로젝트
            진행 상황을 공유하고 개발을 진행함으로써 문제점을 해결함
          </li>
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
