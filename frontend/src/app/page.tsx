"use client"

import {MainContainer} from "../app/styles/layoutStyles/layoutContainerMain/index"
import Box from "./components/layout/box"
import NewsTicker from "./components/layout/newsTicker"

export default function Home() {
  return(
    <MainContainer>
        <Box/>
        <NewsTicker/>
    </MainContainer>
  )
}