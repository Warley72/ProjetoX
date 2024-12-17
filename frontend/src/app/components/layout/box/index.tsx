"use client"

import InforFanKit from './inforFanKit'
import InforPlayers from './inforPlayers'
import InforTwitch from './InforTwitch'
import InforYoutube from './inforYoutube'

import {BoxContainer, NavbarTop, Title, NavbarBottom, InfoBarNumbers } from './style'

export default function Box() {
    return(
        <BoxContainer>
            <NavbarTop />
            <Title />
            <InfoBarNumbers>
                <InforTwitch />
                <InforYoutube />
                <InforFanKit />
            </InfoBarNumbers>
            <NavbarBottom />
        </BoxContainer>
    )
}