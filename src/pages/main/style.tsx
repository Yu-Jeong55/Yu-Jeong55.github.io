import styled from "styled-components";
import { PALETTE } from "styles/Palette";
import { FaGithub } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  min-width: 1000px;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${PALETTE.MAIN.LIGHT_GRAY};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 5;
  background-color: #f9f7f7;
  padding-top: 160px;
  padding-bottom: 300px;

  position: relative;
  clip-path: polygon(0 3.5%, 100% 0, 100% 100%, 0 100%);
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 100px 0 100px 0;
`;

export const ModalAndButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 90%;
  margin: auto;
`;

export const ModalContent = styled.div`
  background-color: white;
  max-width: 1200px;
`;

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 0;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const CloseButton = styled(IoCloseCircle)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${PALETTE.MAIN.GRAY};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GithubLink = styled(FaGithub)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: ${PALETTE.MAIN.LIGHT_GRAY};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GoPageLink = styled(FaExternalLinkAlt)`
  width: 46px;
  height: 46px;
  cursor: pointer;
  color: ${PALETTE.MAIN.LIGHT_GRAY};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
