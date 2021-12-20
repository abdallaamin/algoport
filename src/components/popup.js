import "98.css";
import style from "./popup.css";

const  PopUp=({onclickx})=> {

    return (
        <div className="modal" style={style}>
        <div className="title-bar">
        <div className="title-bar-text">my info</div>
        <div className="title-bar-controls">
        <button aria-label="Close" onClick={onclickx}>&times;</button>
        </div>
    </div>
        <div className="modal_content" style={style}>
        <menu role="tablist" aria-label="Sample Tabs">
        <button role="tab" aria-selected="true" aria-controls="tab-A">Exhibition</button>
        <button role="tab" aria-controls="tab-B">Website </button>
        <button role="tab" aria-controls="tab-C">Me</button>
        </menu>
        <article role="tabpanel" id="tab-A">
        <h3>About Exhibition</h3>
        <p>
        in Dec 2021  cocoon culture center located @cairo, egypt , hosted an algorthmic/generative art  
        </p>
        {/*<p>
        Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role" target="_blank">MDN Web docs - ARIA: tab role</a>
        </p>*/}
    </article>
    </div>
    </div>
    );
};
export default PopUp ;
