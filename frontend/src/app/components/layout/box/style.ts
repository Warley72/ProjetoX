import styled, { css } from "styled-components";

export const BoxContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #3a3738;
  border-right: 2px solid #3a3738;
`;
export const InfoBarNumbers = styled.div`
  display: flex;
  gap: 10px;
`;
const NavbarBase = css`
  position: relative;
  width: 100%;
  height: 6px;
  background-image: url(/box/border-1.gif);
`;

const NavbarCorner = css`
  content: "";
  position: absolute;
  width: 17px;
  height: 17px;
  background-size: cover;
`;

export const NavbarTop = styled.div`
  ${NavbarBase};
  z-index: 1;

  &::before {
    ${NavbarCorner};
    top: -4px;
    left: -5px;
    background-image: url(/box/corner-tl.gif);
  }

  &::after {
    ${NavbarCorner};
    top: -4px;
    right: -5px;
    background-image: url(/box/corner-tr.gif);
  }
`;

export const Title = styled.div`
  content: "";
  width: 100%;
  height: 28px;
  background-image: url(/box/cacheinfo_background.gif);
`;

export const NavbarBottom = styled.div`
  ${NavbarBase};

  &::before {
    ${NavbarCorner};
    bottom: -3px;
    left: -5px;
    background-image: url(/box/corner-bl.gif);
  }
  &::after {
    ${NavbarCorner};
    bottom: -3px;
    right: -6px;
    background-image: url(/box/corner-br.gif);
  }
`;
