"use client"

import {TwitchContainer, ViewersContainer} from "./style"

export default function InforTwitch() {
    return(
        <TwitchContainer>
            <div className="imageTwitch"></div>
            <div className="InfoBarSmallElement ">99</div>
            <ViewersContainer >
                <div className="">3838</div>
            </ViewersContainer>
        </TwitchContainer>
    )
}