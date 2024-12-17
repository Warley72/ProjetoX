"use client"

import {FanKitContainer, InfoBarNumbers} from "./style"

export default function InforFanKit() {
    return(
        <FanKitContainer>
            <div className="imageDownload"></div>
                <InfoBarNumbers>
                    <span className="ViewersNumber">FanKit</span>
                </InfoBarNumbers>
        </FanKitContainer>
    )
}