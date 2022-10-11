import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offers' element={<Offers />} />
        </Routes>
    )
}
export default MainRoutes;