import { useEffect, useState } from "react";
import './App.css';
import { addCounter } from './store/Slices/addToCart.js'
import { addMainArray } from './store/Slices/alldata.js'
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();

    const updatecounter = (index) => {
        dispatch(addCounter(index));
    };
    


    let [allData, setallData] = useState([])

    useEffect(() => {
        var fetchvar = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setallData(json)
                dispatch(addMainArray(json));
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
                            <a className="btn btn-primary" id={`${i}btn`} onClick={() => updatecounter(i)}>Click me to add me to the cart</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default App;