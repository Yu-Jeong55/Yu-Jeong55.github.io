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
        <h1>당신만의 그림일기 '당일'</h1>
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
        <S.SubTitle>프로젝트 기획의도</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>최근 청년들에 관한 두 가지 사회적 이슈에 집중했습니다.</li>
          <li>
            최근 자신의 하루를 기록하는 것고 남기는 것을 좋아하는 MZ세대
            사이에서 갓생살기와 일기 앱이 큰 인기를 끌고있는 흐름으로, 전
            세계적으로 500만 명 이상의 사용자를 모으고 있습니다.
          </li>
          <li>
            또 한가지는 청년들의 무기력함과 우울감입니다. 특히, 취업 시장의
            치열한 경쟁이 원인이 되기도 했고, 다른 이들의 삶과 비교하는 양극화
            또한 심각했습니다.
          </li>
          <li>
            이러한 사회적 현상에 집중해 일기 앱이 사용자의 이목을 집중할 수 있을
            것이라고 생각했습니다. 사용자가 하루의 에피소드를 그림과 함께
            기록함으로써 과거의 기억을 더욱 생생하게 회상할 수 있도록 돕고,
            하루가 무기력한 사람들에게 매일 그림일기를 채우며 하루하루를 더
            열심히 살아가게 하는 동기를 부여하고자 했습니다.
          </li>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            "당신만의 그림일기"의 줄임말과 "오늘의 일기"라는 두 가지 의미를 담고
            있는 서비스입니다.
          </li>
          <li>
            사용자가 자신의 하루를 짧게라도 글로 기록하면 생성형 AI가 텍스트를
            분석해 그림으로 그 하루를 반환해줍니다.
          </li>
          <li>
            알림 서비스, 텍스트를 통한 한달의 감정 및 MBTI 분석 기능을
            제공함으로 사용자가 계속적으로 일기를 기록할 수 있도록 유도했습니다.
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
            텍스트로 작성된 일기를 분석해 생성형 AI를 활용해 하루를 4가지 화풍의
            그림으로 반환 후, 사용자가 하나를 선택해 저장할 수 있도록 제공
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
          <li>사용자 일기 목록 제공 및 검색 기능 제공</li>
        </S.ProjectInfo>
        <S.SubTitleWrapper>
          <S.SubTitle>담당역할</S.SubTitle>
          <span>frontend</span>
        </S.SubTitleWrapper>
        <hr />
        <S.ProjectInfo>
          <li>사용자 일기 작성 flow 화면 제작</li>
          <li>
            react-native-webview를 활용해 React Native Expo 환경에서 kakao
            social login 구현
          </li>
          <li>
            그림 일기 생성 시 사용자 대기시간을 줄이기 위해 해당 페이지 이탈 후,
            일기 생성 완료 fcm 알림 서비스 구현
          </li>
          <li>
            일기 검색 및 전체 일기 목록을 렌더링 시간 단축을 위해 무한 스크롤로
            제공
          </li>
          <li>
            캘린더 화면에서 하루의 이미지와 감정을 토글로 선택적으로 볼 수
            있도록 제공
          </li>
        </S.ProjectInfo>
        <S.SubTitle>트러블슈팅</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <h4>React Native Expo 환경에서 소셜 로그인 구현</h4>
          <ul className="sub-list">
            <li>
              문제점 : 경량화된 Expo 환경에서 앱을 오고 가며 화면을 전환하는데
              한계가 있었음
            </li>
            <li>
              해결점 : webview를 통해 소셜 로그인 페이지를 띄우고 백엔드와
              webview 데이터로 토큰을 주고 받으며 이를 해결
            </li>
          </ul>
          <h4>FCM 알림 서비스 구현</h4>
          <ul className="sub-list">
            <li>
              문제점 : 기존의 네이티브 앱 방식이 아닌 Expo환경에서는 웹앱
              방식으로 알림 서비스를 제공해야 했고, 정보가 부족해 어려움이
              있었음
            </li>
            <li>
              해결점 : React Native Expo 공식문서와 firebase 공식문서를
              참고하고, 블로그 검색을 통해 fcm 알림 서비스를 구현함
            </li>
          </ul>
          <h4>React Native 네비게이션</h4>
          <ul className="sub-list">
            <li>
              문제점 : React Native 스택 네비게이션과 탭 네비게이션을 동시 사용
              시 화면 전환에 혼동을 일으켜 어려움을 겪음
            </li>
            <li>
              해결점 :{" "}
              <a href="https://velog.io/@potato55/react-native-React-navigation-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-typescript">
                [velog] React navigation 사용하기
              </a>
            </li>
          </ul>
        </S.ProjectInfo>
        <S.SubTitle>회고</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <h4>성과</h4>
          <ul className="sub-list">
            <li>
              프로젝트 변수명, 함수명, 파일명 등 혼돈이 오지 않도록 더 신경써서
              이름을 정하고, TypeScript를 사용함으로써 오류를 사전에 방지하고 더
              안정적인 코드를 작성할 수 있었습니다.
            </li>
            <li>
              팀의 기획 의도와 사람들의 의견이 일치하는지 확인하기 위해 실제
              대학교에 직접 가서 일기 앱에 대한 수요도 조사 및 기획한 서비스에
              대한 설문조사를 진행했습니다.
            </li>
            <li>
              하루종일 돌아다니며 총 43명의 설문조사를 모을 수 있었고, 이를
              바탕으로 기획을 수정하고 사용자 서비스를 개선할 수 있었습니다.
            </li>
            <li>원스토어에 앱 서비스를 출시해보는 경험을 했습니다.</li>
          </ul>
          <h4>개선하고 싶은 점</h4>
          <ul className="sub-list">
            <li>
              로그인, 알림 서비스 등에 활용하면 좋을 전역 상태 관리에 대한
              이해도 부족으로 잘 활용해보지 못한 점이 아쉬웠습니다. 전역 상태
              관리 라이브러리를 더 공부하고 제대로 활용해 보고 싶습니다.
            </li>
          </ul>
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
