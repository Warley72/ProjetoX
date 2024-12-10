"use client"

import NetworksBox from "./networksBox"
import { ContainerPremiumBox } from "./style"
import ThemeBox from "./themebox"
import Trailer from "./trailer"

export default function PremiumBox() {
    return(
        <ContainerPremiumBox>
            <ThemeBox />
            <NetworksBox />
            <Trailer />
        </ContainerPremiumBox>
    )
}