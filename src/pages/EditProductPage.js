import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import CustomerList from "../Components/CustomerList";

const EditProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: "",
        quantity: "",
    });
    const [purchasesOfCurrentProduct, setPurchasesOfCurrentProduct] = useState(
        []
    );

    const { id } = useParams();
    const products = useSelector(state => state.productsReducer.products);
    const purchases = useSelector(state => state.purchasesReducer.purchases);

    useEffect(() => {
        const getProduct = () => {
            const productForEdit = products.find(product => product.id === id);
            setProduct(productForEdit);
        };
        const getPurchases = () => {
            const searchPurchase = purchases.filter(
                purchase => purchase.product.id === id
            );
            setPurchasesOfCurrentProduct(searchPurchase);
        };

        getProduct();
        getPurchases();
    }, []);
    const deleteProduct = () => {
        dispatch({ type: "PRODUCTS/DELETE", payload: id });
        navigate("/products");
    };
    const handleChange = e => {
        let { name, value } = e.target;
        value = isNaN(value) ? value : +value;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "PRODUCTS/UPDATE", payload: product });
        navigate("/products");
    };
    return (
        <div
            className='container'
            style={{
                position: "fixed",
                top: "200px",
                border: "2px blue solid",
                margin: "15px",
                padding: "15px",
                display: "flex",
                flexDirection: "row",
            }}>
            <div className='region'>
                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input
                        defaultValue={product.name}
                        onChange={handleChange}
                        name='name'
                    />

                    <br />
                    <label>Price: </label>
                    <input
                        defaultValue={product.price}
                        name='price'
                        onChange={handleChange}
                    />
                    <br />
                    <label>Quantity: </label>
                    <input
                        defaultValue={product.quantity}
                        name='quantity'
                        onChange={handleChange}
                    />
                    <br />
                    <input type='submit' className='button' value='Update' />
                    <input
                        type='button'
                        className='button'
                        value='Delete'
                        onClick={deleteProduct}
                    />
                </form>
            </div>
            <div>
                <h3>Persons who bought this product:</h3>

                <ul>
                    {purchasesOfCurrentProduct.map(customerList => (
                        <CustomerList
                            key={customerList.id}
                            customerForList={customerList.customer.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EditProductPage;
