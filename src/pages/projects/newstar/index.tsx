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
        <h1>사용자 맞춤형 뉴스 숏폼 플랫폼 Newstar</h1>
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
        <S.SubTitle>프로젝트 기획의도</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            유튜브 쇼츠나 인스타그램 릴스와 같은 짧은 형식의 콘텐츠가 유행하면서
            글이 아닌 영상이 익숙한 MZ세대의 문해력이 사회적 이슈가 되고
            있습니다.
          </li>
          <li>
            이러한 문제를 뉴스라는 글로 된 매체를 숏폼 형식으로 제공함으로써
            글을 접하도록 하여 해결하고자 한 프로젝트입니다.
          </li>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            간편하고 효율적인 뉴스 소비를 돕는 뉴스 숏폼 서비스로 News와
            instagram의 합성어입니다.
          </li>
          <li>
            기존의 숏폼 형식과 동일하지만, 영상이 아닌 뉴스 기사를 요약해서
            제공해 MZ세대 뿐만 아니라 뉴스를 가까이 하고 싶은 사람들이 손쉽게
            뉴스를 접하고 단시간에 많은 뉴스를 접할 수 있습니다.
          </li>
          <li>
            또, 관심있는 뉴스만 보고 싶은 사람들을 위해 카테고리를 선택한
            소비자는 키워드 기반 알고리즘을 통해 관심 있는 뉴스만 계속적으로 볼
            수 있습니다.
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
            기반으로 분석해 알고리즘을 통해 사용자의 관심 뉴스만을 연속적으로
            제공
          </li>
          <li>
            AI를 활용해 뉴스를 요약한 뒤, Short Form 형식으로 제공 - pwa를 통해
            웹과 앱 모두 제공
          </li>
          <li>Elasticsearch를 활용해 키워드 기반 뉴스 검색 기능 제공</li>
          <li>사용자 시청 기록 제공</li>
          <li>
            로그인으로 인한 사용자 이탈을 줄이기 위해 사용자 알고리즘을 저장할
            수 있는 uuid를 담은 QR code 제공 - 추후 QR code 등록 시 사용자
            정보를 다시 불러올 수 있음
          </li>
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
        <S.SubTitle>트러블슈팅</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <h4>styled-components 사용 시 경고창</h4>
          <ul className="sub-list">
            <li>
              문제점 : styled-components를 사용해 컴포넌트 재사용을 위해 변수
              전달시 경고창 발생
            </li>
            <li>
              해결점 :{" "}
              <a href="https://velog.io/@potato55/react-styled-components%EB%A1%9C-props-%EC%A0%84%EB%8B%AC-%EC%8B%9C-%EC%97%90%EB%9F%AC">
                [velog] styled-components로 props 전달 시 에러
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
              코드의 모듈화와 재사용성에 신경 쓰고자 아토믹 디자인을 3단계로
              축약해 설계를 하면서 컴포넌트의 재사용성을 높일 수 있었습니다.
            </li>
            <li>
              axios의 모듈화, intercepter의 활용 등으로 더 안정성있고, 효율적인
              코드 구성을 할 수 있었습니다.
            </li>
            <li>
              개발 일정을 철저히 관리해 빠르게 개발을 끝내 실 사용자를
              받아보았고, 2024.04 기준 2주 만에 누적 사용자 수 403명을 달성할 수
              있었습니다.
            </li>
            <li>
              팀 내 개발 일정을 맞추고 서비스에 대한 설문을 받고 개선하는 과정을
              통해 실제 서비스 개발 과정과 사용자 관점에서의 서비스를 이해하고
              비개발적인 요소의 많은 성장 또한 이룰 수 있었습니다.
            </li>
            <li>
              구글 애널리틱스 활용 사용자 행동 분석하고, 실 사용자 대상 서비스
              만족도 설문조사 진행 후, 피드백을 기반으로 3번의 업데이트 진행했고
              그 결과 삼성 청년 SW 아카데미 특화 프로젝트에서 우수상을 수여하는
              성과로 이어졌습니다.
            </li>
          </ul>
          <h4>아쉬운 점</h4>
          <ul className="sub-list">
            <li>
              변수명, 함수명에 대한 섬세함과 타입 지정 등의 아쉬운 문제로 예상치
              못한 에러와 팀원들간 코드 공유에 시간을 소요했던 점이
              아쉬웠습니다. TypeSciprt의 활용 등을 이용해 더 안정적인 코드를
              작성하고 싶습니다.
            </li>
          </ul>
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
