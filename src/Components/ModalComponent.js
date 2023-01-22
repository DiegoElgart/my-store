import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import "./Modal.css";
import db from "../utils/firebase";

const ModalComponent = ({ handleModal, currentUser, products }) => {
    const [currentProduct, setCurrentProduct] = useState("");
    const dispatch = useDispatch();

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
                <span className='titleCloseBtn'>
                    <button onClick={handleModal}>&times;</button>
                </span>
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
