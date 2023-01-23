import Slider from "react-slick";
import "./Carouselscss.scss"
function NextArrowMovie(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style,fontSize: "40px", display: 'block', right:"0px", zIndex:"15", height:"40px"}}
        onClick={onClick}
      >
         <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg>
       {/* <img src="https://firebasestorage.googleapis.com/v0/b/nodejs-93a7d.appspot.com/o/right.png?alt=media&token=3883f6d0-1b07-4361-8aed-77f4537f6a69" alt="next" /> */}
      </div>
   
    );
  }
  function PrevArrowMovie(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "green" }}
        style={{...style,fontSize: "40px", display: 'block', left:"-6px", zIndex:"15", height:"40px", width:'30px'}}
        onClick={onClick}
      >
         <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
     <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/></svg>
     {/* <img src="https://firebasestorage.googleapis.com/v0/b/nodejs-93a7d.appspot.com/o/left.png?alt=media&token=8392621f-cd87-411b-8275-1b3e9fb2e118" alt="prev"/> */}
      </div>
    );
  }
 

export default function Carousel({children}:any) {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            }
          }
        ]
      };
    return (    
            <Slider
                {...setting}
                nextArrow={<NextArrowMovie />}
                prevArrow={<PrevArrowMovie />}
            >
                {children}
            </Slider>

    );
}