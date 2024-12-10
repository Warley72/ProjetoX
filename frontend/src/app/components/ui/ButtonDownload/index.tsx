"use client"

import {ContainerButtonDownload} from "./style"

export default function ButtonDownload() {
    return(
        <ContainerButtonDownload>
            <div className="SmallBoxTop"></div>
            <button className="MediumButton"><img src="/buttons/buttonLogin/mediumbutton_download.png"/></button>
            <div className="SmallBoxBotton"></div>
        </ContainerButtonDownload>
    )
}