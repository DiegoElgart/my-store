import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductHistory = ({ buyer, date }) => {
    const [customer, setCustomer] = useState({});
    const [currentDate, setCurrentDate] = useState("");
    const customers = useSelector(state => state.customersReducer.customers);
    const purchaseDate = date.toDate();

    useEffect(() => {
        const getCustomer = () => {
            const customer = customers.find(
                customer => customer.id === buyer.id
            );
            setCustomer(customer);
        };
        const getDate = () => {
            const date = purchaseDate;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            setCurrentDate(currentDate);
        };
        getDate();
        getCustomer();
    }, []);
    return (
        <ul style={{ border: "1px solid gray", padding: "3px" }}>
            <li>
                <Link to={`../customers/edit/${customer.id}`}>
                    {customer.first_name}
                </Link>
            </li>
            <li>{currentDate}</li>
        </ul>
    );
};

export default ProductHistory;
