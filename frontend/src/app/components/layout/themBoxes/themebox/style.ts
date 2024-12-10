import styled from "styled-components";

export const ContainerPremiumBoxMonster = styled.div`
  position: relative;
  top: 85px;
  display: flex;
  flex-direction: column;

.Monster {
    position: absolute;
    z-index: 2;
    top: -8px;
    left: 17px;
    width: 64px;
    height: 64px;
    background-image: url(/themBoxes/energyelemental.gif);
    background-repeat: no-repeat;
  }
.boss {
    position: absolute;
    z-index: 2;
    top: -8px;
    left: 80px;
    width: 64px;
    height: 64px;
    background-image: url(/themBoxes/rootkraken.gif);
}
.PremiumBoxCoins {
    position: absolute;
    top: 52px;
    left: 15px;
    z-index: 3;
    width: 64px;
    height: 64px;
    background-image: url(/themBoxes/coin_animation.gif);
}
.NewsPedestal {
    position: relative;
    top: 0px;
    z-index: 1;
    left: 20px;
    width: 161px;
    height: 85px;
    background-image: url(/themBoxes/pedestal.gif);
    background-repeat: no-repeat;
    border: none;
}
.NewsPremiumBox {
    position: relative;
    top: -5px;
    left: 10px;
    width: 181px;
    height: 204px;
    background-image: url(/themBoxes/themebox.png);
    background-repeat: no-repeat;
}
.NewsPremiumBoxOverlay {
    position: absolute;
    z-index: 1;
    top: 115px;
    left: 18px;
    width: 163px;
    height: 26px;
    background-image: url(/themBoxes/type_overlay.png);

    color: #fff;
    font-family: Verdana, sans-serif;
    margin-top: 0px;
    text-align: center;
    font-size: 11px;

  p{
    position: relative;
    z-index: 1;
    margin-block-start: 0.2em;
    margin-inline-start: 0px;
    unicode-bidi: isolate;    
  }
}
.NewsPremiumBoxBg {
    position: absolute;
    top: 115px;
    left: 20px;
    width: 160px;
    height: 126px;
    background-image: url(/themBoxes/coins_exp.png);
    background-repeat: no-repeat;
}

.NewsPremiumBoxButtonDecor {
    position: relative;
    z-index: 1;
    top: -64px;
    left: 43px;
    z-index: 1;
    width: 114px;
    height: 26px;
    background-image: url(/themBoxes/premium/button_tibia_coins.png);
    background-repeat: no-repeat;
}
.NewsPremiumBoxButton  {
    position: relative;
    top: -74px;
    left: 29px;
    height: 34px;
    width: 142px;
    background-image: url(/themBoxes/premium/button.png);
    border: none;
    cursor: pointer;

  img {
    width: 140px;
    height: 30px;
  }

  &:hover {
    background-image: url(/themBoxes/premium/button_hover.png);
  }
}
`;
