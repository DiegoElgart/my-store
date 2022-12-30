import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Modal.css";

const ModalComponent = ({ handleModal }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);
    const currentUser = useSelector(
        state => state.isLoggedInReducer.currentUser.id
    );
    /* TENGO QUE COMPLETAR EL REDUCER PARA PODER AGREGAR LA COMPRA!! */
    const addItem = () => {};
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <span onClick={handleModal}>&times;</span>
                <br />
                <label>Products</label>
                <select>
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
                <button onClick={addItem}>Buy!</button>
            </div>
        </div>
    );
};

export default ModalComponent;
