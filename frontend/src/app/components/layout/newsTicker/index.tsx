"use client"
import BoxContentText from "./boxContent"

import {NewsTickerContainer, NavbarTop, NavbarBottom, Title} from "./style"

export default function NewsTicker() {
    return(
        <NewsTickerContainer>
            <NavbarTop />
                <Title />
                    <BoxContentText />
            <NavbarBottom />
        </NewsTickerContainer>
    )
}