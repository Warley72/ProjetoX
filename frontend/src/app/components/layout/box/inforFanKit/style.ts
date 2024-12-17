import styled from "styled-components";

export const FanKitContainer = styled.a`
  position: relative;
  margin-top: -28px;
  left: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .imageDownload {
    position: relative;
    width: 16px;
    height: 16px;
    background-image: url(/box/icon-download.png);
  }
`;
export const InfoBarNumbers = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .ViewersNumber {
    color: #ffffff;
    font-size: 9px;
  }
`;
