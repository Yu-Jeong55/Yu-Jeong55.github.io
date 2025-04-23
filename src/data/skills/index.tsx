import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiStyledcomponents,
  SiGithub,
  SiJira,
  SiNotion,
  SiGitlab,
  SiFigma,
  SiReactquery
} from "react-icons/si";

export const skills = {
  languages: [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      level: [
        "사용자 경험을 고려한 동적 UI 구현할 수 있습니다.",
        "재사용 가능한 함수 및 컴포넌트 작성에 익숙합니다.",
        "비동기 처리에 대한 이해를 통해 JWT 토큰을 사용해본 경험이 있습니다.",
        "사용자 입력 처리, API와 통신, 컴포넌트 단위의 상태 관리까지 다양한 경험을 통해 활용할 수 있습니다."
      ]
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
      level: [
        "React Native + TypeScript 기반 프로젝트 경험이 있으며, JS를 사용하면서 예기치 못한 에러를 방지하고 더 안정적인 코드를 작성하기 위해 타입을 지정하며 개발해본 경험이 있습니다."
      ]
    },
    {
      name: "CSS3",
      icon: <SiCss3 />,
      color: "#1572B6",
      level: ["media query를 사용해 반응형 웹을 구현한 경험이 있습니다."]
    },
    {
      name: "Python",
      icon: <SiPython />,
      color: "#3776AB",
      level: ["간단한 알고리즘 풀이를 할 수 있습니다."]
    }
  ],
  frontend: [
    {
      name: "React",
      icon: <SiReact />,
      color: "#61DAFB",
      level: [
        "컴포넌트 단위 UI를 설계하는데 익숙하며 SPA 구조로 구현할 수 있습니다.",
        "useState, useEffect 등 핵심 훅을 사용해 상태 및 사이드 이펙트를 관리할 수 있습니다.",
        "React Router를 사용해 페이지 전환 처리 경험이 있습니다."
      ]
    },
    {
      name: "React Native",
      icon: <SiReact />,
      color: "#61DAFB",
      level: [
        "React Native Expo 환경을 이해하고, Webview를 사용해 소셜 로그인을 구현한 경험이 있습니다.",
        "firebase를 사용해 Expo 환경에서 알림서비스를 구현한 경험이 있습니다."
      ]
    },
    {
      name: "React Query",
      icon: <SiReactquery />,
      color: "#FF4154",
      level: [
        "로그인, 장바구니 개수, 좋아요 등의 전역 상태관리를 효율적으로 구현할 수 있습니다.",
        "isFetched에 대한 이해를 통해 데이터를 시간차이를 두고 fetch함으로써 사용자 렌더링 시간을 줄인 경험이 있습니다."
      ]
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents />,
      color: "#DB7093",
      level: [
        "CSS 대신 사용해본 경험이 있으며, 변수를 주고받아 재사용 가능한 컴포넌트를 만들 수 있습니다."
      ]
    }
  ],
  tools: [
    {
      name: "Jira",
      icon: <SiJira />,
      color: "#0052CC"
    },
    {
      name: "Notion",
      icon: <SiNotion />,
      color: "#ffffff"
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      color: "#181717"
    },
    {
      name: "GitLab",
      icon: <SiGitlab />,
      color: "#FCA121"
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "#F24E1E"
    }
  ]
};
