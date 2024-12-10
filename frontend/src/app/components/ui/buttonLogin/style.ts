import styled from "styled-components";

export const ContainerBoxLogin = styled.div`
  position: relative;

  .Imagetop {
    cursor: pointer;
    position: relative;
    height: 158px;
    width: 196px;
    border: none;
    z-index: 1;
    background-image: url(/buttons/buttonLogin/tibia-logo-artwork-top.gif);
  }

  .SmallBoxTop {
    position: relative;
    width: 180px;
    height: 12px;
    top: -5px;
    left: 10px;
    background-image: url(/buttons/buttonLogin/box-top.gif);

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 12px;
      left: 6px;
      width: 7px;
      height: 52px;
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
      height: 52px;
      background-image: url(/buttons/buttonLogin/chain.gif);
      border: none;
    }
  }
  .MediumButton {
    position: absolute;
    z-index: 1;
    left: 25px;
    top: 166px;
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
  .buttonCrete {
    position: absolute;
    top: 205px;
    left: 38px;
    height: 11px;
    width: 124px;
    z-index: 3;
    cursor: pointer;
    border: transparent;
    background-color: transparent;
    background-image: url(/buttons/buttonLogin/loginbox-font-create-account.gif);
    background-repeat: no-repeat;

    &:hover {
      background-image: url(/buttons/buttonLogin/loginbox-font-create-account-over.gif);
    }
  }
  .SmallBoxBotton {
    position: relative;
    width: 180px;
    height: 12px;
    top: 47px;
    left: 10px;
    background-image: url(/buttons/buttonLogin/box-bottom.gif);

    &::before {
      content: "";
      position: absolute;
      width: 160px;
      height: 52px;
      top: -52px;
      left: 10px;
      background-image: url(/buttons/buttonLogin/loginbox-textfield-background.gif);
    }
  }
`;
