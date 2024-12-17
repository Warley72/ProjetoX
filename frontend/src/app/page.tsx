"use client";

import { MainContainer } from "../app/styles/layoutStyles/layoutContainerMain/index";
import { MainContainerColumn } from "../app/styles/layoutStyles/layoutColumnMain/index";

import Box from "./components/layout/box";
import NewsTicker from "./components/layout/newsTicker";
import StylePage from "./components/layout/stylePage";
import MenuColumn from "./components/layout/menuColumn";
import PremiumBox from "./components/layout/themBoxes";

export default function Home() {
  return (
    <MainContainerColumn>
      <MenuColumn />
      <MainContainer>
        <Box />
        <NewsTicker />
        <StylePage />
      </MainContainer>
      <PremiumBox />
    </MainContainerColumn>
  );
}
