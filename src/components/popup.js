import "98.css";
import style from "./popup.css";
import {useState } from "react";

const  PopUp=({onclickx})=> {
    const [data,setdata]=useState({
        intial:true,
        title:"How to use me",
        point1:"click on COCOON.EXE and check the online exhibtion to see some generative art works by 5 amazing artists (including me) with thier instagram accounts linked ",
        point2:"click on PLAY WITH ME button it will take you to a new canvas with moving/interactive generative art created in your browser thanks to p5 and react-p5 (touch your screen to change patterns)",
        links:"",
        value:"",
        onA:false,
        onB:false,
        onC:false,
    })

    const onbuttonA=()=>{
        setdata({
            intial:false,
            onA:true,
            title:"online exhibtion",
            point1:"click on COCOON.EXE and check the online exhibtion ",
            point2:"click on PLAY WITH ME will take you to a new canvas with moving/interactive generative art (touch your screen to change patterns)",
            value:"I recently attended a collection of sessions on creating generative art using processing (open source tool for generative art using java ) at cocoon culture center located @cairo , So I took the chance and delved into P5.js which is JavaScript library for creative coding as well but for web.I wanted to make a react PWA(progressive web app) so i used react-p5 wich is a npm package for p5 to use it within your React app to create this website",
        })
        };
    const onbuttonB=()=>{
        setdata({
            intial:false,
            onB:true,
            title:"About website",
            point1:["react","react-p5","material ui /cards","98.css","firebase"],
            point2:"",
            value:"Technologies used to create this :",
        })
        };
    const onbuttonC=()=>{
       setdata({
        intial:false,
        onC:true,
        title:"About Me",
        point1:"The whole theme is inspired by win98 and this was me trying to simulate and create my own version as you can see.(the reson for the whole retro theme as i have been playing a lot of old nostalgic games on my switch lately so that was the first thing came to my mind :D )",
        point2:"",
        value:"My Name is Abdalla Amin ,usually people call me Amin , I am software engineer/artist based on cairo egypt , I am interested in mixing all forms of art with  web technologies , when i am not coding full time i love to play my Bass guitar (among other instruments) , also i love to draw ,sketch and work on interesting side project that can mix coding with my interestes and art in general",
    })
};


    return (
        <div className="modal" style={style}>
        <div className="title-bar">
        <div className="title-bar-text">info</div>
        <div className="title-bar-controls">
        <button aria-label="Close" onClick={onclickx}>&times;</button>
        </div>
    </div>
        <div className="modal_content" style={style}>
        <menu role="tablist" aria-label="Sample Tabs" className="buttonss">
        <button role="tab" aria-controls="tab-A" onClick={onbuttonA}>online Exhibition</button>
        <button role="tab" aria-controls="tab-C" onClick={onbuttonC}>Me</button>
        <button role="tab" aria-controls="tab-B" onClick={onbuttonB}>Website </button>
        
        </menu>
        <article style={{font:3}}>
        <h4>{data.title}</h4>
        <h5>{data.value}</h5>
        {data.intial ? 
                (<>
                <li>
                {data.point1}
                </li>
                <br></br>
                <li>
                {data.point2}
                </li>
                </>) : null }
                { data.onA ? (
                    <>
                    <li>
                    {data.point1}
                    </li>
                    <li>
                    {data.point2}
                    </li>
                    </>
                ) : null }
        { data.onB ? (
                    <>
                    <li>
                    {data.point1[0]}
                    </li>
                    <li>
                    {data.point1[1]}
                    </li>
                    <li>
                    {data.point1[2]}
                    </li>
                    <li>
                    {data.point1[3]}
                    </li>
                    <li>
                    {data.point1[4]}
                    </li>
                    <br></br>
                    
                    <br></br>
                    <a href="https://github.com/abdallaamin/algoport.git"  rel="noreferrer" target="_blank"> <img className ="imagegowa"src="https://i.ibb.co/1J6FB7D/Git-Hub-Mark-32px.png" alt="" /> github repo for this project</a>
                    </>
                ) : null }
                { data.onC ? (
                    <div>
                    <p>
                    {data.point1}
                    </p>
                    <br></br>
                    <div className="Me">
                    <a href="https://github.com/abdallaamin/" class="github" title="github" rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/1J6FB7D/Git-Hub-Mark-32px.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/abdalla-amin-2548ba122/" class="linkedin" title="linkedin" rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/1Z0ZkBf/linked.png" alt=""/>
                    </a>
                    <a href="https://www.instagram.com/theaminoz/" class="instagram" title="instagram" rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/tCb3nMZ/instafix.png" alt="" />
                    </a>
                    </div>
                    </div>
                ) : null }
        </article>

    </div>
    </div>
    );
};
export default PopUp ;
