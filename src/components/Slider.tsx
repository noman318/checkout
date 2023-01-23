// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
// import './Arrow.scss';
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="myhover"
      style={{
        ...style,
        fontSize: "60px",
        display: "block",
        right: "120px",
        zIndex: "15",
        height: "40px",
      }}
      onClick={onClick}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/nodejs-93a7d.appspot.com/o/right.png?alt=media&token=3883f6d0-1b07-4361-8aed-77f4537f6a69"
        alt="right"
        height="40px"
        width="40px"
      />
    </div>
  );
}
function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        fontSize: "60px",
        display: "block",
        left: "60px",
        zIndex: "15",
        height: "40px",
        width: "30px",
      }}
      onClick={onClick}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/nodejs-93a7d.appspot.com/o/left.png?alt=media&token=8392621f-cd87-411b-8275-1b3e9fb2e118"
        alt="left"
        height="40px"
        width="40px"
      />
    </div>
    // <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
    // <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/></svg>
    //
  );
}

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Carousel {...settings}>
      <Warp>
        <img
          src="https://drive.google.com/uc?id=14JFjPPTUK39SpIN77dCBtp4NFQENdred"
          alt="l"
        />
      </Warp>
      <Warp>
        <img
          src="https://drive.google.com/uc?id=10DSo570bbNPM_2agrvUF9orWZNwU5lnF"
          alt="f"
        />
      </Warp>
      <Warp>
        <img
          src="https://drive.google.com/uc?id=13rLpwEabENq8k1EDD8onOvoNuDD2Le2x"
          alt="r"
        />
      </Warp>
      <Warp>
        <img
          src="https://drive.google.com/uc?id=1s500-iTeYkpb1LUBj1W23aAL0fcmHJDp"
          alt="f"
        />
      </Warp>
      <Warp>
        <img
          src="https://drive.google.com/uc?id=1dXN1Zedwtg_Sy_MsIjdSRHXTWfF8u8dB"
          alt="b"
        />
      </Warp>
      <Warp>
        <img
          src="https://drive.google.com/uc?id=1Vl-dpwmWcV_eNyPHRIivRJMw_OUy28kE"
          alt="a"
        />
      </Warp>
    </Carousel>
  );
}

export default Sliders;

const Carousel = styled(Slider)`
  cursor: pointer;
  margin-top: 5px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(158, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: hidden;
  }
  button {
    z-index: 1;
  }
  .slick-next::before,
  .slick-prev::before {
    content: none;
  }
`;

const Warp = styled.div`
  img {
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
`;
