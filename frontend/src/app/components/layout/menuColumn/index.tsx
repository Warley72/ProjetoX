"use client"

import { ContainerMenuColumn } from "./style"

import ButtonDownload from "../../ui/ButtonDownload"
import ButtonLogin from "../../ui/buttonLogin"
import SidebarButtons from "../../ui/buttonsSidebar"

export default function MenuColumn() {
    return(
        <ContainerMenuColumn>
            <ButtonLogin/>
            <ButtonDownload/>
            <SidebarButtons />
        </ContainerMenuColumn>
    )
}