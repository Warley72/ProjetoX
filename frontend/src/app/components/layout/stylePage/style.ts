import styled from "styled-components";

export const ContainerStylePage = styled.div`
  position: relative;
  top: -45px;
  background-color: #debb9d;
  border-left: 2px solid #3a3738;
  border-right: 2px solid #3a3738;
  height: 660px;

  .title {
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
  }
  .scroll {
    content: "";
    position: relative;
    width: 99.1%;
    height: 600px;
    margin: 4px;
    overflow: hidden;
    background-image: url(/newsTicker/scroll.gif);
    border: 1px solid #793d03;
  }
  .navbar-top {
    position: relative;
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
      left: 868px;
      width: 17px;
      height: 17px;
      background-image: url(/box/corner-tr.gif);
    }
  }
  .navbar-bottom {
    position: relative;
    width: 100%;
    height: 6px;
    background-image: url(/box/border-1.gif);

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: -3px;
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
