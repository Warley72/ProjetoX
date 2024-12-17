"use client"

import {NewsTickerContainer, NavbarTop, NavbarBottom, Title} from "./style"

export default function NewsTicker() {
    return(
        <NewsTickerContainer>
            <NavbarTop />
                <Title />
            <NavbarBottom />
        </NewsTickerContainer>
    )
}