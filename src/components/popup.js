import "98.css";
import style from "./popup.css";
import {useState } from "react";

const  PopUp=({onclickx})=> {
    const [data,setdata]=useState({
        intial:true,
        title:"How to use me",
        point1:"click on COCOON.EXE and check the online exhibtion to see some generative art works by 5 amazing artists (including me) with thier instagram accounts linked ",
        point2:"click on PLAY WITH ME button it will take you to a new canvas with moving/interactive generative art created in your browser thanks to p5 and react-p5 (touch your screen to change patterns)",
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
            value:"this December 2021 I recently attended a collection of sessions on creating generative art works using processing (open source tool for generative art using java ) at cocoon culture center located @cairo , So I took the chance and delved into P5.js which is JavaScript library for creative coding but for web .I wanted to make a PWA(progressive web app) using react so i used react-p5 wich is a npm package for p5 to be used within your React app",
        })
        };
    const onbuttonB=()=>{
        setdata({
            intial:false,
            onB:true,
            title:"About website",
            point1:["react","react-p5","material ui /cards","98.css","firebase"],
            point2:"The whole theme is inspired by win98 and this was me trying to simulate and create my own version as you can see.",
            value:"Technologies used to create this website:",
        })
        };
    const onbuttonC=()=>{
       setdata({
        intial:false,
        onC:true,
        title:"About Me",
        point1:"The reason for the whole Retro theme as i have been playing a lot of old nostalgic games on my switch lately and having a blast from the past  so that was the first thing came to my mind :D )",
        point2:"",
        value:"My Name is Abdalla Amin ,usually people call me Amin , I am software engineer/artist based on cairo egypt , I am interested in mixing all forms of art with  web technologies , when i am not coding full time i love to play my Bass guitar (among other instruments) , also i love to draw ,sketch and work on interesting side project ",
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
        <button role="tab" aria-controls="tab-C" onClick={onbuttonC}>About Me</button>
        <button role="tab" aria-controls="tab-B" onClick={onbuttonB}>About Website </button>
        
        </menu>
        <article style={{font:3}}>
        <h4>{data.title}</h4>
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
                    <h5>{data.value}</h5>
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
                    <p>
                    {data.point2}
                    </p>
                    <h5>{data.value}</h5>
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
                    <h5>{data.value}</h5>
                    <p>
                    {data.point1}
                    </p>
                    <br></br>
                    <div className="Me">
                    <a href="https://github.com/abdallaamin/" className="github" title="github" rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/1J6FB7D/Git-Hub-Mark-32px.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/abdalla-amin-2548ba122/" className="linkedin" title="linkedin" rel="noreferrer" target="_blank">
                    <img src="https://i.ibb.co/1Z0ZkBf/linked.png" alt=""/>
                    </a>
                    <a href="https://www.instagram.com/theaminoz/" className="instagram" title="instagram" rel="noreferrer" target="_blank">
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
