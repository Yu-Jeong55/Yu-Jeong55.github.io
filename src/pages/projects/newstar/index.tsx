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

function NewstarDetail() {
  return (
    <>
      <S.NewstarTitle>
        <h2>사용자 맞춤형 뉴스 숏폼 플랫폼 Newstar</h2>
      </S.NewstarTitle>
      <S.ProjectDetailContainer>
        <S.SubTitle>프로젝트 소개</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <S.InfoItem>
            <HiMiniComputerDesktop />
            <S.InfoText>웹앱서비스</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <FaRegCalendarAlt />
            <S.InfoText>2024.02 - 2024.04 (7주)</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <HiOutlineUsers />
            <S.InfoText>6명</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <FaRegBuilding />
            <S.InfoText>삼성 청년 SW 아카데미 특화 프로젝트</S.InfoText>
          </S.InfoItem>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            간편하고 효율적인 뉴스 소비를 돕는 뉴스 숏폼 서비스로 News와
            instagram의 합성어
          </li>
          <li>
            글이 아닌 영상이 익숙한 아이들의 문해력이 사회적 이슈가 되면서 이
            문제를 뉴스를 숏폼 형식으로 제공함으로써 해결하고자 한 프로젝트
          </li>
          <li>
            유튜브 쇼츠나 인스타그램 릴스와 같은 짧은 형식의 콘텐츠가 유행하면서
            사용자가 자신의 관심 분야에 맞는 뉴스를 손쉽게, 그리고 빠르게 접할
            수 있도록 숏폼 형식으로 뉴스를 제공한 서비스
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
            사용자가 선택한 카테고리 및 사용자가 좋아요 표시한 뉴스를 텍스트
            기반으로 분석해 사용자의 관심 알고리즘으로 뉴스를 제공
          </li>
          <li>AI를 활용해 뉴스를 요약 Short Form 형식으로 제공</li>
          <li>Elasticsearch를 활용해 키워드 기반 뉴스 검색 기능 제공</li>
          <li>
            로그인을 대신해 사용자 알고리즘을 저장할 수 있는 uuid를 담은 QR code
            제공 - 추후 QR code 등록 시 사용자 정보를 다시 불러올 수 있음
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
            react-slick 라이브러리를 활용해 좌우로 넘기는 뉴스 숏폼 화면 구현
          </li>
          <li>서비스 기획 의도를 포함하는 Intro 페이지 구현</li>
          <li>
            카테고리 별 뉴스, 사용자 시청 기록을 렌더링 시간을 줄이기 위해 무한
            스크롤(페이지네이션)로 제공
          </li>
          <li>
            uuid를 받아와 QR code를 생성하고 사용자가 이를 저장할 수 있도록 구현
          </li>
          <li>사용자 시청 기록 제공</li>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 성과</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>2024. 04 기준 누적 사용자 수 402명</li>
          <li>구글 애널리틱스 활용 사용자 행동 분석</li>
          <li>
            실 사용자 대상 서비스 만족도 설문조사 진행 후, 3번의 업데이트 진행
          </li>
        </S.ProjectInfo>
      </S.ProjectDetailContainer>
    </>
  );
}

export default NewstarDetail;

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
