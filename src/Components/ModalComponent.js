import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import "./Modal.css";
import db from "../utils/firebase";

const ModalComponent = ({ handleModal }) => {
    const [currentProduct, setCurrentProduct] = useState("");
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);
    const currentUser = useSelector(
        state => state.isLoggedInReducer.currentUser
    );

    const handleChange = e => {
        setCurrentProduct(e.target.value);
    };

    const buyProduct = () => {
        const customerRef = doc(db, "customers", currentUser.id);
        const productRef = doc(db, "products", currentProduct);
        const obj = {
            customer: customerRef,
            product: productRef,
            date: new Date(),
        };
        dispatch({ type: "PURCHASES/NEW", payload: obj });
        handleModal();
        redirect("/home");
    };
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <span onClick={handleModal}>&times;</span>
                <br />
                <label>Products</label>
                <select onChange={handleChange}>
                    <option defaultValue=''>--------------</option>
                    {products.map(product => (
                        <option
                            key={product.id}
                            placeholder={product.name}
                            value={product.id}
                            name='product'>
                            {product.name}
                        </option>
                    ))}
                </select>
                <br />

                <button onClick={buyProduct}>Save</button>
            </div>
        </div>
    );
};

export default ModalComponent;
