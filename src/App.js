import Baseground from "./components/sketch";
// import Ui98 from "./components/ui98";
import styles from "./App.css";
import { useEffect ,useState} from "react";
import Loading from "./loading page/Loading";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
   setTimeout(()=>{
    setloading(false)
   },1500)
  }, [])
  return (
    <div className="App"
    style={styles}>
    { loading ?
      <Loading /> :null }
    <Baseground/>
    </div>
  );
}

export default App;
