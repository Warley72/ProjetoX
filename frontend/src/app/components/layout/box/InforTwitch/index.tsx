"use client"

import {TwitchContainer, ViewersContainer} from "./style"

export default function InforTwitch() {
    return(
        <TwitchContainer>
                <div className="imageTwitch"></div>
            <ViewersContainer >
                <a className="InfoBarSmallElement ">99</a>
                <a className="ViewersNumber">3838</a>
            </ViewersContainer>
        </TwitchContainer>
    )
}