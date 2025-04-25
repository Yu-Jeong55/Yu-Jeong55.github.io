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
          </li>
          <li>
            하지만, 기록을 위해 많은 서비스를 오가야 했습니다.
            <ul className="sub-list">
              <li>채용 공고 확인 : 사람인, 잡코리아, 자소설닷컴 등</li>
              <li>
                채용 일정 및 절차 기록 : 노션, 엑셀, 캘린더 애플리케이션 등
              </li>
              <li>취업 스터디 등 진행 : 구글미트, 줌 등</li>
            </ul>
          </li>
          <li>
            취업 과정 기록에 대한 편의성을 제공해 취업 준비에만 집중할 수 있도록
            위 과정을 모두 한 곳에서 해결할 수 있는 ALL IN ONE 플랫폼을
            기획했습니다.
          </li>
        </S.ProjectInfo>
        <S.SubTitle>프로젝트 개요</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <li>
            취업준비과정 Process와 기록을 한다는 Log의 합성어로 사회인으로서
            시작을 준비 (prologue) 하는 취업준비생들을 위한 플랫폼입니다.
          </li>
          <li>
            서류, 테스트, 면접 전형까지 채용 절차별 템플릿을 제공함으로써 취업
            준비 과정을 손쉽게 기록하고 확인할 수 있는 있습니다.
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
          <li>사람인 API를 통해 받아온 채용 공고를 캘린더에 제공</li>
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
        <S.SubTitleWrapper>
          <S.SubTitle>담당역할</S.SubTitle>
          <span>frontend</span>
        </S.SubTitleWrapper>
        <hr />
        <S.ProjectInfo>
          <li>
            커스텀 캘린더 생성 및 사람인 API로 받아온 채용 공고를 캘린더에서
            확인할 수 있도록 구현
          </li>
          <li>채용공고와 내 일정을 토글로 선택적으로 확인할 수 있도록 제공</li>
          <li>
            react-modal 활용 : 각 채용공고 클릭 시, 모달창에서 채용공고를
            확인하도록 구현
          </li>
          <li>
            각 전형별 템플릿(서류, 테스트, 면접, 빈페이지) 구현 및 API연결
          </li>
        </S.ProjectInfo>
        <S.SubTitle>트러블슈팅</S.SubTitle>
        <hr />
        <S.ProjectInfo>
          <h4>일정 관리의 중요성 간과</h4>
          <ul className="sub-list">
            <li>
              문제점 : 첫 프로젝트였기에 일정 관리의 중요성을 간과하고 구현에만
              집중하다 보니 프로젝트 초반 일정이 조금씩 밀리는 현상 발생
            </li>
            <li>
              해결점 : Jira를 적극 활용해 팀원 모두가 1주를 스프린트 단위로
              계획을 설계하고 프로젝트 진행, 또 매일 아침 10분 스크럼을 통해
              프로젝트 진행 상황을 공유하고 개발을 진행함으로써 문제점을 해결함
            </li>
          </ul>
          <h4>이벤트 함수 전달 시 오류</h4>
          <ul className="sub-list">
            <li>
              문제점 : onClick 이벤트에 함수를 전달할 때 무한 렌더링 현상 발생
            </li>
            <li>
              해결점 :{" "}
              <a href="https://velog.io/@potato55/react-%ED%81%B4%EB%A6%AD-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EC%A7%80-%EC%95%8A%EC%95%98%EB%8A%94%EB%8D%B0-%ED%95%A8%EC%88%98%EA%B0%80-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0">
                [velog] 이벤트가 발생하지 않았는데 함수가 실행되는 이유
              </a>
            </li>
          </ul>
          <h4>date picker 커스텀</h4>
          <ul className="sub-list">
            <li>문제점 : date picker 라이브러리 커스텀에 어려움을 겪음</li>
            <li>
              해결점 :{" "}
              <a href="https://velog.io/@potato55/react-%ED%81%B4%EB%A6%AD-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EC%A7%80-%EC%95%8A%EC%95%98%EB%8A%94%EB%8D%B0-%ED%95%A8%EC%88%98%EA%B0%80-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0">
                [velog] date picker 라이브러리 사용하기
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
              Figma를 이용한 설계와 디자인 작업을 통해 컴포넌트 구조에 대한
              이해도가 향상했습니다.
            </li>
            <li>
              초기 Figma 설계를 탄탄히 해서 Figma 화면과 최종 결과가 매우
              흡사하게 나오면서 프로젝트 최종 발표 때 동기들에게 좋은 반응을
              얻었습니다.
              <S.FigmaImgWrapper>
                <S.Image src="images/figma1.png" alt="figma-img1" />
                <S.Image src="images/figma2.png" alt="figma-img2" />
              </S.FigmaImgWrapper>
            </li>
            <li>
              캘린더 라이브러리를 사용하지 않고, JavaScript로 캘린더를 직접
              구현해보면서 JavaScript에 대한 이해도가 향상됨을 느꼈습니다.
            </li>
          </ul>
          <h4>개선하고 싶은 점</h4>
          <ul className="sub-list">
            <li>
              react를 활용한 첫 프로젝트라 react 라이브러리를 다양하게
              활용해보지 못한 점이 아쉬웠습니다. 라이브러리를 잘 활용해 개발
              시간을 줄일 수 있으면 좋겠습니다.
            </li>
            <li>
              또, api 호출 주소, axios의 모듈화, 컴포넌트의 재사용성이 많이
              떨어지는 점이 아쉬웠습니다. api를 호출하는 것에 대한 모듈화로
              코드의 재사용성과 안정성을 높이고 싶습니다.
            </li>
          </ul>
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
