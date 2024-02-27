import Nav from "./navigations/Nav.jsx";
import Products from "./products/Products.jsx";
import Recommended from "./recommended/Recommended.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import {useState} from "react";

import ProductsData from './db/data.js';
import ProductCard from "./components/ProductCard.jsx";
import products from "./products/Products.jsx";

function App(){
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")

    const handleInputSearch = event => {
        setQuery(event.target.value)
    }

    const handleRadioChange = event => {
        setSelectedCategory(event.target.value)
    }

    const handleButtonClick = event => {
        setSelectedCategory(event.target.value)
    }

    const filteredItems = ProductsData.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase() !== -1))

    function filteredData (products, selected, query) {
        let filteredProducts = ProductsData
        if(query){
            filteredProducts = filteredItems
        }

        if(selected){
            filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
        }

        return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice, company, color, category}) => (
            <ProductCard
                key={Math.random()}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
                company={company}
                color={color}
                category={category}
            />
        ))
    }

    const result = filteredData(products, selectedCategory, query)

    return (
        <>
            <Sidebar handleRadioChange={handleRadioChange} />
            <Nav />
            <Recommended />
            <Products />
        </>

    )
}

export default App;