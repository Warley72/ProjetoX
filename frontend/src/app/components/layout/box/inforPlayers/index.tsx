"use client"

import {PlayersContainer, InfoBarNumbers} from "./style"

export default function InforPlayers() {
    return(
        <PlayersContainer>
                <InfoBarNumbers>
                    <span className="InfoBarSmallElement"></span>
                    <span className="ViewersNumber">100</span>
                    <span className="InfoBarSmallElementPlayes"> Players Online </span>
                </InfoBarNumbers>
        </PlayersContainer>
    )
}