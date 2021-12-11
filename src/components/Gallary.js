import "98.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import style from "./Gallary.css";
import Typography from '@mui/material/Typography';


const  Gallary=()=> {

    return (

        <div className="title-bar">
        <div className="title-bar-text">cocoon.exe</div>
        <div className="title-bar-controls">
        <button aria-label="Close" ></button>
        </div>
        <div className="gallaryWindow" style={style}>
        <h3 style={{font:15}}>Exhibtion</h3>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/r7MTBp2/12-8-21-46-15.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Lizard
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/r7MTBp2/12-8-21-46-15.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Lizard 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            by amin
        </Typography>
        </CardContent>
        </Card>
    </div>
    </div>
    );
};
export default Gallary ;
