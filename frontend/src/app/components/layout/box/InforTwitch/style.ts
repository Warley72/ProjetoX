import styled from "styled-components";

export const TwitchContainer = styled.a`
  position: relative;
  margin-top: -28px;
  left: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .imageTwitch {
    position: relative;
    width: 47px;
    height: 16px;
    background-image: url(/box/icon-twitch.png);
  }
`;
export const InfoBarNumbers = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .InfoBarSmallElement {
    height: 7px;
    width: 11px;
    background-image: url(/box/icon-streamers.png);

    font-size: 7px;
    color: #ffffff;
  }
  .ViewersNumber {
    color: #ffffff;
    font-size: 9px;
  }
  .InfoBarSmallElementPlayes {
    position: relative;
    height: 7px;
    width: 11px;
    background-image: url(/box/icon-viewers.png);
  }
`;
