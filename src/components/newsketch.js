import React from "react";
import "98.css";
import Sketch from "react-p5";



const NewWin =(props)=>{
    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(250,250).parent(canvasParentRef);
		p5.frameRate(100);
    }
    const draw = (p5) => {
		p5.background(0);
		
    }

return <Sketch setup={setup} draw={draw} />;
};
export default NewWin ;