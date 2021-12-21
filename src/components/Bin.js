import "98.css";
import style from "./Bin.css";


const  Bin=({onbin})=> {

    return (
        <div className="modal" style={style}>
        <div className="title-bar">
        <div className="title-bar-text">recycle bin</div>
        <div className="title-bar-controls">
        <button aria-label="Close" onClick={onbin} ></button>
        </div>
    </div>
        <div className="bin" style={style}>
        <article role="tabpanel" id="tab-A">
        <img src="https://i.ibb.co/D51PfzV/capi.png" alt="Logo" style={{width:300, height:200 , marginTop:100 }}/> 
    </article>
    :'D
    </div>
    </div>
    );
};
export default Bin ;
