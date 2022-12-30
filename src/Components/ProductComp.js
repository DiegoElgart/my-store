import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductHistory from "./ProductHistory";
const ProductComp = ({ product, handleModal }) => {
    const [buyHistory, setBuyHistory] = useState([]);
    const purchases = useSelector(state => state.purchasesReducer.purchases);
    //console.log(purchases[0].date.toDate());
    useEffect(() => {
        const checkHistory = () => {
            const buyHistory = purchases.filter(
                purchase => purchase.product.id === product.id
            );
            setBuyHistory(buyHistory);
        };
        checkHistory();
    }, []);

    return (
        <div className='card'>
            <ul>
                <li>
                    <Link to={`edit/${product.id}`}>Name: {product.name}</Link>
                </li>
                <li>Price: {product.price}</li>
                <li>Quantity: {product.quantity}</li>
                <br />
                <div>
                    <h5>Customers that bought this</h5>
                    {buyHistory.map(purchase => (
                        <ProductHistory
                            key={purchase.id}
                            buyer={purchase.customer}
                            date={purchase.date}></ProductHistory>
                    ))}
                    <br />
                    <button onClick={handleModal}>Add</button>
                </div>
            </ul>
        </div>
    );
};

export default ProductComp;
