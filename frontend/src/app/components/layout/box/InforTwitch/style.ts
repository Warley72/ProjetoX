import styled from "styled-components";

export const TwitchContainer = styled.div`
    position: absolute;
    cursor: pointer;
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
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;

&::before {
  content: "";
  position: relative;
  width: 11px;
  height: 7px;
  background-image: url(/box/icon-streamers.png);
 }  
}
.InfoBarSmallElement {
  position: absolute;
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

.ViewersNumber{
  color:#ffffff;
  font-size: 9px;
}
`