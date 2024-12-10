"use client"

import { ContainerPremiumBoxMonster } from "./style"

export default function ThemeBox() {
    return(
        <ContainerPremiumBoxMonster>
            <div className="Monster"></div>
            <div className="boss"></div>
            <div className="PremiumBoxCoins"></div>
            <div className="NewsPedestal"></div>
            <div className="NewsPremiumBox"></div>
            <div className="NewsPremiumBoxOverlay"><p>Use XP Boots!</p></div>
            <div className="NewsPremiumBoxBg"></div>
            <div className="NewsPremiumBoxButtonDecor"></div>
            <button className="NewsPremiumBoxButton"> <img src="/themBoxes/premium/get_tibia_coins.png"  /></button>
        </ContainerPremiumBoxMonster>
    )
}