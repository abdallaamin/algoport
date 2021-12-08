import "98.css";
import {useState} from "react";
import { render } from "@testing-library/react";
import styles from "./ui98.css";

const Ui=()=> {
    
const [showmenu, setShowmenu] = useState(true);
const renderMenue= ()=>{
    render(
        <div className="start-menu-wrapper">
            <div className="start-menu-title">
            <span><strong>Cocoon</strong>98</span>
            </div>
            <div className="start-menu">
            </div>
        </div>
    ) 

}
const hopab2a = ()=>{
    setShowmenu(!showmenu);
}

const handleonClick=()=>{
    showmenu  && setShowmenu ? renderMenue() : hopab2a() ;
};
    return (
    
    <div id="toolbar" style={styles}>
    <div className="toolbar-start-menu">
    <button 
    value="0"
    onClick={()=>handleonClick()}
    className="start-button">
        Yalla
    </button>
    </div>
    </div>
    );
};

export default Ui;