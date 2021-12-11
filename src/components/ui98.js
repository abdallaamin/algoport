import "98.css";
import {useState} from "react";
import styles from "./ui98.css";
import StartMenue from "./Startmenu";

const Ui=()=> {
    const [state, setState] = useState({
        seen: false
    });
    const toggleMenu = () => {
        setState({
        seen: !state.seen
        });
    };
// const [showmenu, setShowmenu] = useState(true);
    return (
    
    <div id="toolbar" style={styles}>
    <div className="toolbar-start-menu">
    <button 
    value="0"
    onClick={()=>toggleMenu()}
    className="start-button">
        Yalla
    </button>
    </div>
    {state.seen ? <StartMenue /> : null}
    </div>
    );
};

export default Ui;