import Nav from "./navigations/Nav.jsx";
import Products from "./products/Products.jsx";
import Recommended from "./recommended/Recommended.jsx";

function App(){
    return (
        <>
            <Nav/>
            <Recommended />
            <Products />
        </>

    )
}

export default App;