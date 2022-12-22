import { useSelector } from "react-redux";

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
    return (
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
                <select>
                    <option defaultValue=''>--------------</option>
                    {products.map(product => (
                        <option key={product.id} defaultValue={product.name}>
                            {product.name}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <label>Customers</label>
                <select>
                    <option defaultValue=''>--------------</option>
                    {customers.map(customer => (
                        <option
                            key={customer.id}
                            defaultValue={customer.first_name}>
                            {customer.first_name}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <input type='date' defaultValue={getDate()} />
            </div>
        </div>
    );
};

export default PurchasesPage;
