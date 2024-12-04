import styled from "styled-components";

export const BoxContainer = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #3a3738;
  border-right: 2px solid #3a3738;

  &::before {
    content: "";
    position: relative;
    width: 100%;
    height: 28px;
    background-image: url(/box/cacheinfo_background.gif);
  }
  .navbar-top {
    position: absolute;
    top: -6px;
    z-index: 2; 
    width: 100%;
    height: 6px;
    background-image: url(/box/border-1.gif);

    &::before {
      content: "";
      position: absolute;
      z-index: 3;
      top: -4px;
      left: -5px;
      width: 17px;
      height: 17px;
      background-image: url(/box/corner-tl.gif);
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 3;
      top: -5px;
      left: 1009px;
      width: 17px;
      height: 17px;
      background-image: url(/box/corner-tr.gif);
    }
  }

  .navbar-bottom {
    width: 100%;
    height: 6px;
    background-image: url(/box/border-1.gif);

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 20px;
      left: -5px;
      width: 17px;
      height: 17px;
      background-image: url(/box/corner-bl.gif);
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: -3px;
      right: -6px;
      width: 17px;
      height: 17px;
      background-image: url(/box/corner-br.gif);
    }
  }
`;
