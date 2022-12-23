import React from "react";
import { useSelector } from "react-redux";
import CustomerComp from "../Components/CustomerComp";
import MenuComp from "../Components/MenuComp";

const CustomersPage = () => {
    const customers = useSelector(state => state.customersReducer.customers);
    return (
        <div className='container'>
            <div className='region'>
                <h1>The Table</h1>
                <table
                    style={{
                        margin: "5px",
                        padding: "15px",
                        border: "1px solid black",
                        borderCollapse: "separate",
                        tableLayout: "fixed",
                        width: "100%",
                        textAlign: "center",
                    }}>
                    <tbody>
                        <tr>
                            <th>Customer First Name</th>
                            <th>Customer Last Name</th>
                            <th>Products:</th>
                            <th>Purchase:</th>
                        </tr>
                        {customers.map(customer => (
                            <CustomerComp
                                key={customer.id}
                                customer={customer}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='region'></div>
        </div>
    );
};

export default CustomersPage;
