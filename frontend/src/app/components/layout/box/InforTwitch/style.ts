import styled from "styled-components";

export const TwitchContainer = styled.div`
    position: absolute;
    top: 14px;
    left: 7px;

    display: flex;
    flex-direction: column;
    justify-content: center;

.imageTwitch {
  position: absolute;
  width: 47px;
  height: 16px;
  background-image: url(/box/icon-twitch.png);

  display: flex;
  flex-direction: column;
  justify-content: center;

&::before {
  content: "";
  position: absolute;
  left: 55px;
  width: 11px;
  height: 7px;
  background-image: url(/box/icon-streamers.png);
 }  
}
.InfoBarSmallElement {
  position: absolute;
  left: 72px;
  font-size: 9px;
  color: #ffffff;
}
`
export const ViewersContainer = styled.div`
position: absolute;
left: 93px;
width: 11px;
height: 7px;
background-image: url(/box/icon-viewers.png);
`