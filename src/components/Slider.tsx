// import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import NextArrow from './ArrowSlider/NextArrow';
import PrevArrow from './ArrowSlider/PrevArrow';
// import './sliders.css'

function Sliders() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: "center",
        centerPadding: "100px",
      centerMode: true,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
    };

    return (

        <Carousel {...settings}>
            <Warp>
                <img src='https://drive.google.com/uc?id=14JFjPPTUK39SpIN77dCBtp4NFQENdred' alt='l' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=10DSo570bbNPM_2agrvUF9orWZNwU5lnF' alt='f' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=13rLpwEabENq8k1EDD8onOvoNuDD2Le2x' alt='r' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=1s500-iTeYkpb1LUBj1W23aAL0fcmHJDp' alt='f' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=1dXN1Zedwtg_Sy_MsIjdSRHXTWfF8u8dB' alt='b' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=1Vl-dpwmWcV_eNyPHRIivRJMw_OUy28kE' alt='a' />
            </Warp>
        </Carousel>
    )
}

export default Sliders


const Carousel = styled(Slider)`
    cursor: pointer;
    margin-top: 5px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    .slick-list {
        overflow: hidden;
    }
    button {
        z-index: 1;
    }
`

const Warp = styled.div`

    img{
        border: 4px solid transparent;
        border-radius: 5px;
        width: 97%;
        height: 100%;
        box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`