import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductHistory from "./ProductHistory";
import DateComp from "./DateComp";

function CustomerComp({ customer }) {
    const purchases = useSelector(state => state.purchasesReducer.purchases);
    const [purchasesOfCurrentProduct, setPurchasesOfCurrentProduct] = useState(
        []
    );

    useEffect(() => {
        const getPurchases = () => {
            const searchPurchase = purchases.filter(
                purchase => purchase.customer.id === customer.id
            );
            setPurchasesOfCurrentProduct(searchPurchase);
        };

        getPurchases();
    }, []);
    return (
        <tr>
            <td>
                <Link to={`edit/${customer.id}`}> {customer.first_name}</Link>
            </td>
            <td>{customer.last_name}</td>
            <td>
                {purchasesOfCurrentProduct.map(productList => (
                    <ProductsList
                        key={productList.id}
                        productForList={productList.product.id}
                    />
                ))}
            </td>
            <td>
                {purchasesOfCurrentProduct.map(productList => (
                    <DateComp key={productList.id} date={productList.date} />
                ))}
            </td>
        </tr>
    );
}

export default CustomerComp;
