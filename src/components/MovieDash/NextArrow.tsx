export default function NextArrowMovie(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "red" }}
        style={{...style,fontSize: "60px", display: 'block', right:"50px", zIndex:"15", height:"40px"}}
        onClick={onClick}
      >
        {/* Custom icon we can used */}
      </div>
   
    );
  }

