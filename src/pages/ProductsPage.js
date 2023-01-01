import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComp from "../Components/ProductComp";
import ModalComponent from "../Components/ModalComponent";

const ProductsPage = () => {
    const products = useSelector(state => state.productsReducer.products);
    const purchases = useSelector(state => state.purchasesReducer.purchases);
    const currentUser = useSelector(
        state => state.isLoggedInReducer.currentUser
    );
    const [currentPurchase, setCurrentPurchase] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const checkPurchase = () => {
            const { id } = currentUser;

            const currentPurchase = purchases.filter(
                purchase => purchase.customer.id === id
            );
            setCurrentPurchase(currentPurchase);
        };
        checkPurchase();
    }, [openModal]);
    const handleModal = () => {
        setOpenModal(!openModal);
    };
    return (
        <>
            {openModal && <ModalComponent handleModal={handleModal} />}
            <div className='container' style={{ display: "flex" }}>
                <div className='card' style={{ height: "150px" }}>
                    <h1>There are {currentPurchase.length} in the cart</h1>
                </div>
                <div className='region'>
                    {products.map(product => (
                        <ProductComp
                            key={product.id}
                            product={product}
                            handleModal={handleModal}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
