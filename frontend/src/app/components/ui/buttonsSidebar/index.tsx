"use client"
import {useState} from 'react';
import {  SidebarButton, ContainerSidebarButtons, SidebarIcon, ContainerButton, BoxLeft, BoxRight, MenuExtend, MenuExtendeExit } from './style';

export default function SidebarButtons() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    return(
        <ContainerSidebarButtons >
            <div className='SmallBoxTop'></div>
            {/* Botão News */}
            <SidebarButton
                onClick={toggleSidebar}
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-news.png" alt="News" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-news.gif"
                />
                <MenuExtend />
                <MenuExtendeExit $isOpen={isOpen}/>
            </SidebarButton>
            <ContainerButton $isOpen={isOpen} >
                <BoxLeft $isOpen={isOpen} />
                <BoxRight $isOpen={isOpen} />
            </ContainerButton>

            {/* Botão About Tibia */}
            <SidebarButton
                $top="86px"
                $backgroundImage="sidebar/button-background.gif"
                $hoverImage="sidebar/button-background-over.gif"
                >
                <img src="sidebar/sidebarbuttons/label-abouttibia.png" alt="abouttibia" />
                <SidebarIcon
                $top="0px"
                $iconImage="sidebar/sidebarbuttons/icon-abouttibia.gif"
                />
            </SidebarButton>
            
             {/* Botão Game guides */}
            <SidebarButton
                $top="86px"
                $backgroundImage="sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-gameguides.png" alt="abouttibia" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-gameguides.gif"
                />
            </SidebarButton>

             {/* Botão Library */}
            <SidebarButton
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-library.png" alt="label-library" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-library.gif"
                />
            </SidebarButton>

             {/* Botão Community */}
            <SidebarButton
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-community.png" alt="label-community" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-community.gif"
                />
            </SidebarButton>

            {/* Botão Forum */}
            <SidebarButton
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-forum.png" alt="forum" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-forum.gif"
                />
            </SidebarButton>

            {/* Botão account */}
            <SidebarButton
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-account.png" alt="account" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-account.gif"
                />
            </SidebarButton>

             {/* Botão charactertrade */}
            <SidebarButton
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-charactertrade.png" alt="charactertrade" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-charactertrade.gif"
                />
            </SidebarButton>
            
             {/* Botão Support */}
            <SidebarButton
                $top="86px"
                $backgroundImage="/sidebar/button-background.gif"
                $hoverImage="/sidebar/button-background-over.gif"
                >
                <img src="/sidebar/sidebarbuttons/label-support.png" alt="Support" />
                <SidebarIcon
                $top="0px"
                $iconImage="/sidebar/sidebarbuttons/icon-support.gif"
                />
            </SidebarButton>
            <div className='SmallBoxBotton'></div>
        </ContainerSidebarButtons>
    )
}