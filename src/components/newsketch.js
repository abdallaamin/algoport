import React from "react";
import "98.css";
import Sketch from "react-p5";


 // {<button className="closebutton" onClick={closeplay}>&times;</button>;}

const Playwme =({closeplay})=>{
  let width =window.innerWidth;
  let height=window.innerHeight;
  const setup = (p5, canvasParentRef) => {
		let cnv= p5.createCanvas(window.innerWidth,window.innerHeight).parent(canvasParentRef);
    cnv.position(0,0);
    p5.noStroke();
    // p5.fill(0,15,30);
    // p5.noStroke();
  
}
    const draw = (p5) => {
      // let x = p5.mouseX;
      // let y = p5.mouseY;
      // let ix = width - p5.mouseX;  // Inverse X
      // let iy = height - p5.mouseY; // Inverse Y
      // let t = 0;
    let angle ;
		p5.background(126);
    var closebutton = p5.createButton("x");
		closebutton.mousePressed(()=>closeplay());
		closebutton.position((width-85),9);
    // p5.fill(255, 150);
    // p5.ellipse(x, height/2, y, y);
    // p5.fill(0, 159);
    // p5.ellipse(ix, height/2, iy, iy);
    let x = width;
    let d = 150;
    let num = 120 ;
    p5.translate(width/2, height/2);
    for(let a=0;a<360; a+=22){
    p5.rotate(p5.radians(p5.mouseX));
    p5.push();
  for(let i =0 ; i<num ;i++){
    p5.fill(p5.mouseX+i*8,1.5*i+a,p5.mouseX+a*i);
    p5.scale(0.95);
    p5.rotate(p5.radians(angle)*5);
    p5.ellipse(p5.mouseX, p5.mouseX, d, d);
  }
  p5.pop();
}
angle +=0.01;
    
}

return( 
  <div className="main">
    <Sketch setup={setup} draw={draw} />
  </div>
    )
};
export default Playwme ;