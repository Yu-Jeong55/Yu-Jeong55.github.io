import * as S from "../style";

import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";

import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiStyledcomponents
} from "react-icons/si";

function TodayDetail() {
  return (
    <>
      <S.TodayTitle>
        <h2>당신만의 그림일기 '당일'</h2>
      </S.TodayTitle>
      <S.ProjectDetailContainer>
        <S.SubTitle>프로젝트 소개</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <S.InfoItem>
            <HiMiniComputerDesktop />
            <S.InfoText>앱서비스</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <FaRegCalendarAlt />
            <S.InfoText>2024.04 - 2024.05 (6주)</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <HiOutlineUsers />
            <S.InfoText>6명</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <FaRegBuilding />
            <S.InfoText>삼성 청년 SW 아카데미 자율 프로젝트</S.InfoText>
          </S.InfoItem>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            당신만의 그림일기의 줄임말과 오늘의 일기라는 두 가지 의미를 담고
            있는 서비스
          </li>
          <li>
            사용자가 하루의 에피소드를 그림과 함께 기록함으로써 과거의 기억을
            더욱 생생하게 회상할 수 있도록 돕고, 하루가 무기력한 사람들에게 매일
            그림일기를 채우며 하루하루를 더 열심히 살아가게 하는 동기를 부여
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
          <li>
            텍스트로 작성된 일기 텍스트를 분석해 생성형 AI를 활용해 하루를 4가지
            그림으로 반환 후, 사용자가 하나를 선택할 수 있도록 제공
          </li>
          <li>
            사용자가 일기를 작성하지 않은 날 또는 그림 생성이 완료된 이후 알림을
            제공
          </li>
          <li>
            사용자가 작성한 일기들 중 해당 날짜에 속하는 하루를 대표하는 이미지
            또는 감정을 캘린더에 표시 ( 토글 )
          </li>
          <li>
            생성형 AI를 활용해 사용자가 작성한 일기의 텍스트를 분석해 사용자의
            하루, 한 달의 감정, MBTI를 분석해 제공
          </li>
          <li>사용자 시청 기록 제공</li>
        </S.ProjectInfo>
        <S.SubTitleWrapper>
          <S.SubTitle>담당역할</S.SubTitle>
          <span>frontend</span>
        </S.SubTitleWrapper>
        <hr />
        <S.ProjectInfo>
          <li>
            react-native-webview를 활용해 React Native Expo 환경에서 kakao
            social login 구현
          </li>
          <li>
            그림 일기 생성 시 사용자 대기시간을 줄이기 위해 일기 생성 완료 fcm
            알림 서비스 구현
          </li>
          <li>
            일기 검색 및 전체 일기 목록을 렌더링 시간 단축을 위해 무한 스크롤로
            제공
          </li>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 성과</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>원스토어 출시</li>
          <li>
            일기 앱에 대한 사용자의 수요도 조사를 위해 실제 한 대학교에 가서
            기획한 서비스에 대한 설문조사를 진행한 후, 이를 바탕으로 기획을
            수정하고 사용자 서비스를 개선
          </li>
        </S.ProjectInfo>
      </S.ProjectDetailContainer>
    </>
  );
}

export default TodayDetail;

const SKILLS_PROPS = [
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    color: "#DB7093"
  }
];
