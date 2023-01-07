import { useState } from "react";
import { useSelector } from "react-redux";
import CustomerComp from "../Components/CustomerComp";
import ModalComponent from "../Components/ModalComponent";

const CustomersPage = () => {
    const customers = useSelector(state => state.customersReducer.customers);
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
    };
    return (
        <div className='container'>
            {openModal && <ModalComponent handleModal={handleModal} />}
            <h1>The Table</h1>
            <button onClick={handleModal}>Buy</button>
            <table
                style={{
                    margin: "5px",
                    padding: "15px",
                    border: "1px solid black",
                    borderCollapse: "collapse",
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
                        <CustomerComp key={customer.id} customer={customer} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomersPage;
