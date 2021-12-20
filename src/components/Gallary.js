import "98.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import style from "./Gallary.css";
import Typography from '@mui/material/Typography';


const  Gallary=({onclickgallary})=> {
//    let winsize =[
//        window.innerWidth,
//        Window.innerHeight,
//    ];
//  {winsize[0] && winsize[1]=== ["",""] ?<div className="gallaryWindow" style={{display:"flex"}}/>:null }
    let instaurl = ["https://instagram.com/andreeambessinha?utm_medium=copy_link","https://instagram.com/ha6iba?utm_medium=copy_link","https://instagram.com/hazemshaltoot.art?utm_medium=copy_link","https://instagram.com/ziad.hossamaly?utm_medium=copy_link","https://www.instagram.com/theaminoz/"]
    return (
    
        <div className="title-bar">
        <div className="title-bar-text">cocoon.exe</div>
        <div className="title-bar-controls">
        <button aria-label="Close" onClick={onclickgallary}></button>
        </div>
        <div className="gallaryWindow" style={style}>
        <h3 style={{font:15}}>Exhibtion</h3>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/wK5DzFQ/1.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[1]} target="_blank" rel="noreferrer">Habiba Afifi</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/44W0JcC/2.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[1]} target="_blank" rel="noreferrer">Habiba Afifi</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/C8V9MnX/0010.jpg"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/WsBj37j/Screen-Shot-2021-11-16-at-11-39-44-AM.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[3]} target="_blank" rel="noreferrer">Ziad Hossam</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/wKB1HcY/11-10-21-9-16.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/60yLrhp/12-8-17-50-35.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[4]} target="_blank" rel="noreferrer">Abdalla Amin</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/kSV4c9S/11-10-21-16-34.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/2NdqT6w/milkyway-Andrea.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[0]} target="_blank" rel="noreferrer">Andree Ambessinha </a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/MsxRnry/11-10-21-36-9.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/VDtfQRK/11-12-14-21-50.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/r5zYXGB/12-8-17-48-49.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[4]} target="_blank" rel="noreferrer">Abdalla Amin</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/n1nCRTd/11-22-20-17-45.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/BrHhcnh/11-22-21-11-46.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/CvNb9KL/12-8-17-50-37.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[4]} target="_blank" rel="noreferrer">Abdalla Amin</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/g6bdMZd/11-22-21-36-10.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/h7NvBwd/Andrea-2.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[0]} target="_blank" rel="noreferrer">Andree Ambessinha </a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/MsxRnry/11-10-21-36-9.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[2]} target="_blank" rel="noreferrer">Hazem Shaltoot</a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/P6ZnFtY/Andrea-1.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[0]} target="_blank" rel="noreferrer">Andree Ambessinha </a>
        </Typography>
        </CardContent>
        </Card>
        <br></br>
        <Card sx={{
            boxShadow: 1,
            p: 2,
            minWidth: 200,
            minHeight: 200,
            maxWidth: 400,
            maxHeight: 550,
            border: 1 ,
            zIndex: 'tooltip',
            margin: 2 ,
            font:15,
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://i.ibb.co/5cgfGVt/Screen-Shot-2021-11-08-at-9-38-42-PM.png"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href={instaurl[3]} target="_blank" rel="noreferrer">Ziad Hossam</a>
        </Typography>
        </CardContent>
        </Card>
        
    </div>
    </div>
    );
};
export default Gallary ;
