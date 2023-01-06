import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductsList from "../Components/ProductsList";

const EditCustomerPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        first_name: "",
        last_name: "",
        city: "",
    });
    const [purchasesOfCurrentProduct, setPurchasesOfCurrentProduct] = useState(
        []
    );

    const { id } = useParams();
    const customers = useSelector(state => state.customersReducer.customers);
    const purchases = useSelector(state => state.purchasesReducer.purchases);

    useEffect(() => {
        const getCustomer = () => {
            const customerForEdit = customers.find(
                customer => customer.id === id
            );
            setCustomer(customerForEdit);
        };
        const getPurchases = () => {
            const searchPurchase = purchases.filter(
                purchase => purchase.customer.id === id
            );
            setPurchasesOfCurrentProduct(searchPurchase);
        };
        getCustomer();
        getPurchases();
    }, []);
    const handleChange = e => {
        let { name, value } = e.target;
        value = isNaN(value) ? value : +value;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "CUSTOMERS/UPDATE", payload: customer });
        navigate("/customers");
    };

    const deleteCustomer = () => {
        dispatch({ type: "CUSTOMERS/DELETE", payload: id });
        navigate("/customers");
    };
    return (
        <div
            className='container'
            style={{
                position: "fixed",
                top: "200px",
                border: "2px blue solid",
                margin: "15px",
                padding: "15px",
                display: "flex",
                flexDirection: "row",
            }}>
            <div className='region'>
                <form onSubmit={handleSubmit}>
                    <label>First Name: </label>
                    <input
                        defaultValue={customer.first_name}
                        onChange={handleChange}
                        name='first_name'
                    />
                    <br />
                    <label>Last Name: </label>
                    <input
                        defaultValue={customer.last_name}
                        onChange={handleChange}
                        name='last_name'
                    />
                    <br />
                    <label>City: </label>
                    <input
                        defaultValue={customer.city}
                        name='price'
                        onChange={handleChange}
                    />
                    <br />

                    <br />
                    <input type='submit' className='button' value='Update' />
                    <input
                        type='button'
                        className='button'
                        value='Delete'
                        onClick={deleteCustomer}
                    />
                </form>
            </div>
            <div className='region'>
                <h3>Products bought by this Customer:</h3>
                <ul>
                    {purchasesOfCurrentProduct.map(productList => (
                        <ProductsList
                            key={productList.id}
                            productForList={productList.product.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EditCustomerPage;
