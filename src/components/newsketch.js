import React from "react";
import "98.css";
import { render } from "react-dom";


const NewSkt = ()=>{


    render (
    <div>
    <div class="title-bar">
    <div class="title-bar-text">A Title Bar</div>
    <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
    </div>
    </div>
    </div>
    )

}
export default NewSkt ;