import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ productForList }) => {
    const [productList, setProductList] = useState([]);

    const products = useSelector(state => state.productsReducer.products);

    useEffect(() => {
        const getProduct = () => {
            const product = products.find(
                product => product.id === productForList
            );
            setProductList(product);
        };

        getProduct();
    }, []);
    return (
        <li key={productList.id}>
            <Link to={`../products/edit/${productList.id}`}>
                {productList.name}
            </Link>
        </li>
    );
};

export default ProductsList;
