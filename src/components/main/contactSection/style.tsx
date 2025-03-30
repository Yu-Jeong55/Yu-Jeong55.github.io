import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const ContactTitle = styled.div`
  font-size: ${FONT.SIZE.TITLE};
  font-family: "gotham-black";
  margin-bottom: 50px;

  span {
    font-family: "gotham-black";
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${FONT.SIZE.BASIC};

  svg {
    font-size: 24px;
    color: ${PALETTE.MAIN.BLACK};
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  letter-spacing: 1.2px;

  .contact-info-title {
    width: 80px;
  }
`;
