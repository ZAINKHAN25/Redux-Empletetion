import { useSelector } from "react-redux";
import { changesidebar } from "./store/Slices/sidebartrue.js";
import { useDispatch } from "react-redux";


function App() {
    const { sidebar } = useSelector((state) => state);
    const dispatch = useDispatch();

    const updatecounter = () => {
        dispatch(changesidebar());
    };


    return (
        <div className="d-flex position-sticky top-0 left-0 justify-content-between px-5 py-2 fs-3">
            <span>Website Name</span>
            <span onClick={updatecounter} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Your Carts</span>
        </div>
    )
}


export default App;