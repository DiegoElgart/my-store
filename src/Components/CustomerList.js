import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomerList = ({ customerForList }) => {
    const [customerList, setCustomerList] = useState([]);
    const customers = useSelector(state => state.customersReducer.customers);

    useEffect(() => {
        const getCustomer = () => {
            const customer = customers.find(
                customer => customer.id === customerForList
            );
            setCustomerList(customer);
        };
        getCustomer();
    }, []);

    return (
        <li key={customerList.id}>
            <Link to={`../customers/edit/${customerList.id}`}>
                {customerList.first_name}
            </Link>
        </li>
    );
};

export default CustomerList;
