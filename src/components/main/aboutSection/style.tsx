import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-top: 60px;
  margin-bottom: var(--bottom);
`;

export const AboutTitle = styled.div`
  font-size: ${FONT.SIZE.TITLE};
  font-family: "gotham-black";
  margin-bottom: 16px;

  span {
    font-family: "gotham-black";
  }
`;

export const AboutImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${PALETTE.MAIN.POINT};
  margin-bottom: 26px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AboutInfo = styled.div`
  text-align: center;
  font-size: ${FONT.SIZE.BASIC};
`;

export const AboutGreet = styled(AboutInfo)`
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: ${FONT.SIZE.BASIC};
  color: ${PALETTE.MAIN.DARK_GRAY};
  letter-spacing: 1.2px;
`;

export const AboutThank = styled(AboutInfo)`
  font-size: ${FONT.SIZE.BASIC};
  color: ${PALETTE.MAIN.GRAY};
  letter-spacing: 1.2px;
`;

export const AboutDescription = styled.ul`
  margin-top: 20px;
  font-size: ${FONT.SIZE.BIG};
  color: ${PALETTE.MAIN.DARK_GRAY};
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    min-height: 80px;

    &:nth-child(1) {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: flex-end;
    }

    &:nth-child(3) {
      justify-content: flex-start;
    }

    span {
      font-size: ${FONT.SIZE.TITLE};
      font-family: "gotham-bold";
      color: ${PALETTE.MAIN.POINT};
    }
  }

  svg {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    flex-shrink: 0;
    color: white;
  }
`;
