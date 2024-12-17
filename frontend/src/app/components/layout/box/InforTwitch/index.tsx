"use client"

import {TwitchContainer, InfoBarNumbers} from "./style"

export default function InforTwitch() {
    return(
        <TwitchContainer>
            <div className="imageTwitch"></div>
                <InfoBarNumbers>
                    <span className="InfoBarSmallElement"></span>
                    <span className="ViewersNumber">100</span>
                    <span className="InfoBarSmallElementPlayes"></span>
                    <span className="ViewersNumber">1513</span>
                </InfoBarNumbers>
        </TwitchContainer>
    )
}