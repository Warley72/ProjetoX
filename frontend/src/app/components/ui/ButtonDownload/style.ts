import styled from "styled-components";

export const ContainerButtonDownload = styled.div`
  position: relative;

  .SmallBoxTop {
    position: relative;
    z-index: 1;
    width: 180px;
    height: 12px;
    top: 55px;
    left: 10px;
    background-image: url(/buttons/buttonLogin/box-top.gif);

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 12px;
      left: 6px;
      width: 7px;
      height: 39px;
      background-image: url(/buttons/buttonLogin/chain.gif);
      border: none;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 12px;
      left: 168px;
      width: 7px;
      height: 39px;
      background-image: url(/buttons/buttonLogin/chain.gif);
      border: none;
    }
  }
  .MediumButton {
    position: absolute;
    z-index: 1;
    left: 25px;
    top: 68px;
    width: 150px;
    height: 37px;
    background-image: url(/buttons/buttonLogin/mediumbutton.gif);
    background-color: transparent;
    background-repeat: no-repeat;
    cursor: pointer;
    border: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      background-image: url(/buttons/buttonLogin/mediumbutton-over.gif);
    }
  }
  .SmallBoxBotton {
    position: relative;
    width: 180px;
    height: 12px;
    top: 94px;
    left: 10px;
    background-image: url(/buttons/buttonLogin/box-bottom.gif);

    &::before {
      content: "";
      position: absolute;
      width: 160px;
      height: 40px;
      top: -40px;
      left: 10px;
      background-image: url(/buttons/buttonLogin/loginbox-textfield-background.gif);
    }
  }
`;
