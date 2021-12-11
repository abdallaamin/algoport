import "98.css";
import style from "./Bin.css";
import IS from './IS.png';

const  Bin=()=> {

    return (
        <div className="modal" style={style}>
        <div className="title-bar">
        <div className="title-bar-text">my info</div>
        <div className="title-bar-controls">
        <button aria-label="Close" ></button>
        </div>
    </div>
        <div className="bin" style={style}>
        <article role="tabpanel" id="tab-A">
        <img src={IS} alt="Logo" />;
    </article>
    </div>
    </div>
    );
};
export default Bin ;
