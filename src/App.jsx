import Nav from "./navigations/Nav.jsx";
import Products from "./products/Products.jsx";
import Recommended from "./recommended/Recommended.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

function App(){
    return (
        <>
            <Sidebar />
            <Nav />
            <Recommended />
            <Products />
        </>

    )
}

export default App;