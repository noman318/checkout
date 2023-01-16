/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from '@mui/material';
import './sliders.css'
function NextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      style={{...style,fontSize: "60px", display: 'block', right:"50px", zIndex:"15", height:"40px"}}
      onClick={onClick}
    ><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg></div>
  );
}

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      style={{...style,fontSize: "60px", display: 'block', left:"35px", zIndex:"15", height:"40px", width:'30px'}}
      onClick={onClick}
    ><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/></svg></div>
  );
}

export default function Sliders(){
  const settings = {
    dots: true,
    centerPadding: "37px",
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: true,
        }
      }
    ]
  };
  return (
    <Container maxWidth="xl" style={{background:'whitesmoke',paddingTop:'5px',paddingLeft:'50xp'}}>
        <Slider {...settings}>
          <div  className="a1">
            <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg' style={{borderRadius:'20px'}}/>
          </div>
          <div className="a2">
          <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg' style={{borderRadius:'20px'}}/>
          </div>
          <div className="a3">
          <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg' style={{borderRadius:'20px'}}/>
          </div>
        </Slider>
      </Container>
  )
}
