import styled from "styled-components";

export const ContainerTrailer = styled.div`
    position: relative;
    top: 45px;
    left: 12px;
    height: 31px;
    width: 180px;
    background-image: url(/themBoxes/trailer/trailerbox-header.gif);
    

    &::before {
        content: "";
        position: absolute;
        top: 140px;
        height: 12px;
        width: 180px;
        background-image: url(/themBoxes/trailer/box-bottom.gif);
    }
.trailerTibia {
    position: relative;
    top: 30px;
    left: 5px;
    cursor: pointer;
}
`