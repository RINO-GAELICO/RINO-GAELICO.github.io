export const BackGround = ({ mousePosition }) => {
    const calculateGradient = () => {
      const x = mousePosition.x;
      const y = mousePosition.y;
      const gradientX = ((x / window.innerWidth) * 100).toFixed(2);
      const gradientY = ((y / window.innerHeight) * 100).toFixed(2);
      return `radial-gradient(600px at ${gradientX}% ${gradientY}%, rgba(247, 81, 255, 0.15), transparent 80%)`;
    };
  
    const bannerStyle = {
      background: calculateGradient(),
    };
  
    return <div className="backGround" style={bannerStyle}></div>;
  };
  