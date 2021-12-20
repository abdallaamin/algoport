import React , {useState} from "react";
import "98.css";
import Sketch from "react-p5";
import Ui from "./ui98";
import PopUp from "./popup";
import Gallary from "./Gallary";
import Bin from "./Bin";

// import { render } from "react-dom";




// let x = 50;
// let xy = 0;
// let direction = '^';
console.log("width",window.innerWidth);
console.log("height",window.innerHeight);
let img1,img2,img3;

const Baseground=(props) => {
	const [popb, setpopb] = useState({
        show: false
    });

	const onclickingP = () => {
        setpopb({
		show: true
        });
    };
	const oncloseingP = () => {
        setpopb({
		show: false
        });
    };
	const [gallary, setgallary] = useState({
        show: false
    });

	const onopenGallary = () => {
        setgallary({
		show: true
        });
    };
	const oncloseGallary = () => {
        setgallary({
		show: false
        });
    };
	const [bin, setbin] = useState({
        show: false
    });

	const onopenBin = () => {
        setbin({
		show: true
        });
    };
	const oncloseBin = () => {
        setbin({
		show: false
        });
    };
	// let state = {
	// 	seen: false
	// };
	
	// let togglePop = () => {
	// 	this.setState({
	// 	seen: !this.state.seen
	// 	});
	// };
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth,window.innerHeight).parent(canvasParentRef);
		// mainwin.style('display', 'block');
		p5.frameRate(100);
		// let newtab=()=>{
		// 	console.log("mn gowa");
		// 	render(
		// 		<Ui />
		// 	);
		// }
		const all_bustton=()=>{
		var drawButton = p5.createButton("my info");
		drawButton.position(20,73);
		drawButton.mousePressed(()=>onclickingP());
		var drawButton1 = p5.createButton("cocoon.exe");
		drawButton1.mousePressed(()=>onopenGallary());
		drawButton1.position(20,166);
		var drawButton2 = p5.createButton("recycle bin");
		drawButton2.mousePressed(()=>onopenBin());
		drawButton2.position(20,260);
		};
		const all_images=()=>{
		img1 = p5.loadImage("https://i.ibb.co/Fg9yvFg/pngwing-com-1.png");
		img2 = p5.loadImage("https://i.ibb.co/jMvKghg/cocoonrefinfin.png");
		img3 = p5.loadImage("https://i.ibb.co/nsg1q7G/27.png");
		};
		all_bustton();
		all_images();
		
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
	};
	// let rand =Math.random();
	const draw = (p5) => {
		p5.background(227, 219, 152);
		p5.image(img1,28,15,50,50);
		p5.image(img2,29,105,48,50);
		p5.image(img3,28,200,50,50);

		// p5.fill(144, 255, 59);
		// p5.ellipse(x, xy, 70, 70);
		// p5.rect(rand, xy, 150, 90);
		// x++;
		//y++;
		// p5.fill(255, xy * 1.3, 0);
		// p5.ellipse(p5.width / 2, xy, 50);
		// if (xy > p5.height) direction = '';
		// if (xy < 0) {
		// 	direction = '^';
		// }
		// if (direction === '^') xy += 8;
		// else xy -= 4;
	};

	return (
		<div>
		<Sketch setup={setup} draw={draw} />
		{popb.show ? <PopUp onclickx={oncloseingP}/> : null}
		{gallary.show ? <Gallary onclickgallary={oncloseGallary}/> : null}
		{bin.show ? <Bin onbin={oncloseBin}/> : null}
		<Ui/>
		</div>
		
		);
	};
export default Baseground ;