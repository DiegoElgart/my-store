import { useSelector } from "react-redux";
import { useState } from "react";

const PurchasesPage = () => {
    const getDate = () => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
        return currentDate;
    };
    const products = useSelector(state => state.productsReducer.products);
    const customers = useSelector(state => state.customersReducer.customers);

    const [product, setProduct] = useState({});
    const [customer, setCustomer] = useState("");

    const handleProduct = e => {
        setProduct(e.target.value);
    };

    const handleCustomer = e => {
        setCustomer(e.target.value);
    };
    return (
        <div className='container'>
            <div
                className='regions'
                style={{ height: "600px", position: "absolute", top: "200px" }}>
                <div
                    className='region'
                    style={{
                        padding: "20px",
                        margin: "20px",
                        justifyContent: "space-between",
                    }}>
                    <h1>Purchase</h1>

                    <label>Products</label>
                    <select onChange={handleProduct}>
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
                    <br />
                    <label>Customers</label>
                    <select onChange={handleCustomer}>
                        <option defaultValue=''>--------------</option>
                        {customers.map(customer => (
                            <option
                                key={customer.id}
                                placeholder={customer.first_name}
                                value={customer.id}
                                name='customer'>
                                {customer.first_name}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <input type='date' defaultValue={getDate()} />
                    <br />
                    <br />
                    <input type='button' value='Search' className='btn' />
                </div>
            </div>
        </div>
    );
};

export default PurchasesPage;
