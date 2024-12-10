"use client"

import {ContainerBoxLogin} from "./style"

export default function ButtonLogin() {
    return(
        <ContainerBoxLogin>
            <div  className="Imagetop"></div>
            <div className="SmallBoxTop"></div>
            <button className="MediumButton"><img src="/buttons/buttonLogin/mediumbutton_login.png" /></button>
            <button className="buttonCrete"></button>
            <div className="SmallBoxBotton"></div>
        </ContainerBoxLogin>
    )
}