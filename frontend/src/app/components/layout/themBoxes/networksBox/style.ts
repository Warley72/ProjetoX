import styled from "styled-components";

export const ContainerNetworksBox = styled.div`
    position:  relative;
    top: 25px;
    left: 12px;
    height: 98px;
    width: 180px;
    background-image: url(/themBoxes/networksBox/networksbox.png);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    &::before {
      content: "";
      position: absolute;
      top: 85px;
      z-index: 2;
      height: 12px;
      width: 180px;
      background-image: url(/themBoxes/networksBox/box-bottom.gif);
    }

.buttonFacebook {
      position: relative;
      top: 8px;
      z-index: 2;
      height: 30px;
      width: 30px;
      background-image: url(/themBoxes/networksBox/button_facebook_idle.png);
      cursor: pointer;

      &:hover{
        background-image: url(/themBoxes/networksBox/button_facebook_hover.png);
      }
}
.buttonYoutube {
      position: relative;
      top: 8px;
      z-index: 2;
      height: 30px;
      width: 30px;
      background-image: url(/themBoxes/networksBox/button_youtube_idle.png);
      cursor: pointer;

      &:hover{
        background-image: url(/themBoxes/networksBox/button_youtube_hover.png);
      }
}
`
