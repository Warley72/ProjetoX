import styled from "styled-components";

export const PlayersContainer = styled.a`
  position: relative;
  top: -20px;
  cursor: pointer;
`;

export const InfoBarNumbers = styled.div`
  position: absolute;
  width: 120px;
  display: flex;
  gap: 5px;

  .InfoBarSmallElement {
    position: relative;
    height: 14px;
    width: 11px;
    background-image: url(/box/icon-players-online.png);
  }
  .ViewersNumber {
    position: relative;
    color: #ffffff;
    font-size: 9px;
  }
  .InfoBarSmallElementPlayes {
    color: #ffffff;
    font-size: 7pt;
  }
`;
