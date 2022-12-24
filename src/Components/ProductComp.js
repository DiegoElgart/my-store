import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductComp = ({ product }) => {
    const [customer, setCustomer] = useState({});
    const [date, setDate] = useState("");

    const customers = useSelector(state => state.customersReducer.customers);
    const purchases = useSelector(state => state.purchasesReducer.purchases);
    console.log(purchases[0].date);
    useEffect(() => {
        if (purchases[0].product.id === product.id) {
            let customer = customers.find(
                customer => customer.id === purchases[0].customer.id
            );

            setCustomer(customer);
        }
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
                    <ul>
                        <li>{customer.first_name}</li>
                        <li>Bought: </li>
                    </ul>
                    <br />
                    <button>Add</button>
                </div>
            </ul>
        </div>
    );
};

export default ProductComp;
