import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CustomerComp({ customer }) {
    const purchases = useSelector(state => state.purchasesReducer.purchases);

    return (
        <tr>
            <td>
                <Link to={`edit/${customer.id}`}> {customer.first_name}</Link>
            </td>
            <td>{customer.last_name}</td>
            <td>product</td>
            <td>date</td>
        </tr>
    );
}

export default CustomerComp;
