import './App.css';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function App() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {    
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
    
      <motion.h1      
      animate={{
            scale: [0, 1, 1, 2, 1],
            rotate: [0, 0, 2, -5, 5, -2, 0, 360, -360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 2,
            repeatDelay: 1
          }}
      className="heading">IMAGE CAROUSEL</motion.h1>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} 
        className="inner-carousel">
          {images.map(image => {
            return(
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
