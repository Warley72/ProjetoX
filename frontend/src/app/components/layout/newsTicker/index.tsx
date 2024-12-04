"use client"

import {NewsTickerContainer} from "./style"

export default function NewsTicker() {
    return(
        <NewsTickerContainer>
            <div className="navbar-top"></div>
                <div className="title"></div>
                    <div className="scroll"></div>
            <div className="navbar-bottom"></div>
        </NewsTickerContainer>
    )
}