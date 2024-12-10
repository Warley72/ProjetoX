import styled from "styled-components";

export const ContainerSidebarButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 25px;
`
export const ContainerButton = styled.div<{ $isOpen: boolean }>`
  position: relative;
  left: 20px;
  top: 86px;
  height: ${props => (props.$isOpen ? '0' : '63px')};
  transition: height 0s;
  background-color: rgb(13, 46, 43);
  width: 161px;
`;
const BoxSide = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  z-index: 1;
  width: 7px;
  height: 63px;
  background-image: url(/buttons/buttonlogin/chain.gif);
`;
export const BoxLeft = styled(BoxSide)`
  left: -5px;
  opacity: ${props => (props.$isOpen ? '0' : '1')};
  transition: opacity 0.1s ease, visibility 0.8s ease;
`;
export const BoxRight = styled(BoxSide)`
  left: 158px;
  opacity: ${props => (props.$isOpen ? '0' : '1')};
  transition: opacity 0s ease, visibility 0s ease;
`;
export const MenuExtend = styled.div`
  position: absolute;
  z-index: 4;
  top: 20px;
  left: 160px;
  width: 12px;
  height: 12px;
  background-image: url(/buttons/buttonlogin/plus.gif);
  pointer-events: none;
`;
export const MenuExtendeExit = styled.div<{ $isOpen: boolean }>`
 position: absolute;
  z-index: 4;
  top: 20px;
  left: 160px;
  width: 12px;
  height: 12px;
  background-image: url(/buttons/buttonlogin/plus.gif);
  pointer-events: none;
  opacity: ${props => (props.$isOpen ? '0' : '1')};
  background-image: url(/buttons/buttonlogin/minus.gif);
  pointer-events: none;
`;
export const SidebarButton = styled.button<{ $top: string; $backgroundImage: string; $hoverImage: string }>`
  position: relative;
  z-index: 1;
  top: ${({ $top }) => $top};
  left: 15px;
  width: 170px;
  height: 32px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  border: none;
  cursor: pointer;

  img {
    position: relative;
    top: 2px;
    left: 15px;
    width: 116px;
    height: 22px;
    object-fit: contain;
  }

  &:hover {
    background-image: url(${({ $hoverImage }) => $hoverImage});
  }
`;
export const SidebarIcon = styled.div<{ $top: string; $iconImage: string }>`
  position: absolute;
  z-index: 3;
  top: ${({ $top }) => $top};
  left: 8px;
  width: 32px;
  height: 32px;
  background-image: url(${({ $iconImage }) => $iconImage});
  pointer-events: none;
`;