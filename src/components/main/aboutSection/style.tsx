import styled from "styled-components";
import { FONT, PALETTE } from "styles/Palette";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 70%;
  padding-top: var(--top);
  margin-bottom: var(--bottom);
`;

export const AboutTitle = styled.div`
  color: ${PALETTE.MAIN.LIGHT_GRAY};
  font-size: ${FONT.SIZE.TITLE};
  font-weight: ${FONT.WEIGHT.BOLD};
`;

export const AboutImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 30px;
  border: 3px solid ${PALETTE.MAIN.POINT};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AboutInfo = styled.div`
  text-align: center;
  font-size: ${FONT.SIZE.BASIC};
  color: ${PALETTE.MAIN.LIGHT_GRAY};
`;

export const AboutGreet = styled(AboutInfo)`
  margin-bottom: 30px;
`;

export const AboutDescription = styled.ul`
  line-height: 2.4;
  margin-top: 20px;
  font-size: ${FONT.SIZE.BIG};
  color: ${PALETTE.MAIN.GRAY};

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 16px;
    line-height: 2;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-top: 7px;
    flex-shrink: 0;
    color: ${PALETTE.MAIN.POINT};
  }
`;
