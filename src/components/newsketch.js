import React from "react";
import "98.css";
import Sketch from "react-p5";


 // {<button className="closebutton" onClick={closeplay}>&times;</button>;}
 let angle =0.0;
const Playwme =({closeplay})=>{
  let width =window.innerWidth;
  let height=window.innerHeight;
  const setup = (p5, canvasParentRef) => {
		let cnv= p5.createCanvas(window.innerWidth,window.innerHeight).parent(canvasParentRef);
    cnv.position(0,0);
    // p5.fill(0,15,30);
    // p5.noStroke();
  // p5.rectMode(center);
  p5.rectMode("CENTER");
  p5.fill(10,15,30);
  // p5.strokeWeight(3);
  
}
    const draw = (p5) => {
      // let x = p5.mouseX;
      // let y = p5.mouseY;
      // let ix = width - p5.mouseX;  // Inverse X
      // let iy = height - p5.mouseY; // Inverse Y
      // let t = 0;
      let rand = (Math.random())*15
		p5.background(0,15,30);
    var closebutton = p5.createButton("x");
		closebutton.mousePressed(()=>closeplay());
		closebutton.position((width-85),9);
    p5.text("touch yourscreen")
    p5.translate(width/2, height/2);
    let scaleVar =p5.map(p5.mouseX*2.5,0,width,0.5,5);
    p5.scale(scaleVar);
    for(let i=0;i<200;i++){
      for(let j=0;j<i;j++){
    p5.fill(130+rand/2*i*j,70+i*rand/3*j,250-i*rand*0.5*j)
    p5.scale(0.95);
    p5.rotate(p5.radians(angle));
    p5.rect((p5.mouseX)/4*i,-j,600,600);
    p5.rect(-j,i,300,300);
    p5.ellipse(50,50,400,400);
    }
    angle+=0.03;
  }
    
//     p5.fill(255, 150);
//     p5.ellipse(x, height/2, y, y);
//     p5.fill(0, 159);
//     p5.ellipse(ix, height/2, iy, iy);
//     // let xw = width;
//     let d = 200;
//     let num = 100 ;
//     p5.translate(width/2, height/2);
//     for(let a=0;a<360; a+=39){
//     p5.rotate(p5.radians(p5.mouseX));
//     p5.push();
//   for(let i =0 ; i<num ;i++){
//     p5.fill(p5.mouseX+i,1.5*i+a,p5.mouseX*a*i);
//     // p5.fill(127, 240, 208);
//     p5.scale(0.95);
//     p5.rotate(p5.radians(angle)*5);
//     p5.ellipse(0, 0, d, d);
//     p5.ellipse(-p5.mouseX, -p5.mouseX, d, d);
//   }
//   p5.pop();
// }

}

return( 
  <div className="main">
    <Sketch setup={setup} draw={draw} />
  </div>
    )
};
export default Playwme ;