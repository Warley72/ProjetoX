import styled, { css } from "styled-components";

export const NewsTickerContainer = styled.div`
  background-color: #debb9d;
  border-left: 2px solid #3a3738;
  border-right: 2px solid #3a3738;
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
  position: relative;
  width: 100%;
  height: 25px;
  background-image: url(/newsTicker/title-background-green.gif);

  &::before {
    content: "";
    position: absolute;
    left: 6px;
    width: 250px;
    height: 25px;
    background-image: url(/newsTicker/headline-news.gif);
  }
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




