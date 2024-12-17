"use client"

import {YoutubeContainer, InfoBarNumbers} from "./style"

export default function InforYoutube() {
    return(
        <YoutubeContainer>
            <div className="imageYoutube"></div>
                <InfoBarNumbers>
                    <span className="InfoBarSmallElement"></span>
                    <span className="ViewersNumber">10</span>
                    <span className="InfoBarSmallElementPlayes"></span>
                    <span className="ViewersNumber">513</span>
                </InfoBarNumbers>
        </YoutubeContainer>
    )
}