"use client"

import InforTwitch from './InforTwitch'

import {BoxContainer} from './style'

export default function Box() {
    return(
        <BoxContainer>
            <div className="navbar-top"></div>
                <InforTwitch/> 
            <div className="navbar-bottom"></div>
        </BoxContainer>
    )
}