import { useEffect, useState } from "react";
import './App.css';
import { useSelector } from "react-redux";
import { addCounter } from './store/Slices/addToCart.js'
import { useDispatch } from "react-redux";

function App() {

    const { addtocardarr } = useSelector((state) => state);
    const dispatch = useDispatch();

    const updatecounter = (index) => {
        console.log("updatecounter");
        dispatch(addCounter(index));
    };


    let [allData, setallData] = useState([])

    useEffect(() => {
        var fetchvar = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setallData(json)
            })
    }, [])
    return (
        <div className="bodyOfMain">
            {allData.map((x, i) => {
                return (
                    <div key={i} className="card">
                        <img src={x.image} className="card-img-top cardimag" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{x.title}</h5>
                            <p className="card-text">{x.description.slice(0, 30)}....</p>
                            <a href="#" className="btn btn-primary" onClick={()=>updatecounter(i)}>Click me to add me to the cart</a>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
}


export default App;