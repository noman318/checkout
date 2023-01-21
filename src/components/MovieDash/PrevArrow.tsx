export default   function PrevArrowMovie(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "green" }}
        style={{...style,fontSize: "60px", display: 'block', left:"35px", zIndex:"15", height:"40px", width:'30px'}}
        onClick={onClick}
      >
      {/* Custom icon we can used  */}
      </div>
      
      
    );
  }
