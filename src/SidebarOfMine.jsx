import { useSelector } from "react-redux";

import './App.css'

function App() {

    const { addtocardarr } = useSelector((state) => state.cartslice);
    const { mainarr } = useSelector((state) => state.mainArraySlice);
    console.log(mainarr[addtocardarr[0]], "mainarr");


    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Your Cart's</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    {
                        addtocardarr.map((x, i) => {
                            return (
                                <div className="d-flex align-items-center px-2" key={i}>
                                    <img className="sideimg" src={mainarr[x].image} alt="" />
                                    <span className="ms-2">
                                        {mainarr[x].title}
                                    </span>
                                </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App;