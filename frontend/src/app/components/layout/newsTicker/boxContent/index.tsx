"use client";

import { BoxContentContainer, ContentContainer, BorderContainer, } from "./style";

export default function BoxContentText() {
  return (
    <BoxContentContainer>
      <ContentContainer>
        <BorderContainer>
          <div className="NewsTickerShortText">
            <div>
              Tomorrow, December 10, the server save on all game worlds will
              take about 30 minutes due to maintenance work. During this
              downtime, the website may also be temporarily unavailable. We
              expect all game worlds and the website back online around 10:30
              CET.
            </div>
            <div className="NewsTickerShortTextborder2">
              Tomorrow, December 10, the server save on all game worlds will
              take about 30 minutes due to maintenance work. During this
              downtime, the website may also be temporarily unavailable. We
              expect all game worlds and the website back online around 10:30
              CET.
            </div>
            <div>
              We have released a client fix for the issue where, under specific conditions, 
              the incorrect tier of certain items was submitted when creating a buy offer in the market.
            </div>
            <div className="NewsTickerShortTextborder2">
              Tomorrow, December 10, the server save on all game worlds will
              take about 30 minutes due to maintenance work. During this
              downtime, the website may also be temporarily unavailable. We
              expect all game worlds and the website back online around 10:30
              CET.
            </div>
            <div>
            Tomorrow, December 3, the server save on all game worlds will take about 30 minutes due to maintenance work. During this downtime, 
            the website may also be temporarily unavailable. We expect all game worlds and the website back online around 10:30 CET.
            </div>
          </div>
        </BorderContainer>
      </ContentContainer>
    </BoxContentContainer>
  );
}
