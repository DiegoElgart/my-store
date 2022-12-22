import "./index.css";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query } from "firebase/firestore";
import db from "./utils/firebase";
import MenuPage from "./Components/MenuPage";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./Components/ProductsPage";
import { useDispatch } from "react-redux";
import EditProductPage from "./Components/EditProductPage";
import CustomersPage from "./Components/CustomersPage";
import EditCustomerPage from "./Components/EditCustomerPage";
import PurchasesPage from "./Components/PurchasesPage";

function App() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            const q = query(collection(db, "products"));
            onSnapshot(q, querySnapshot => {
                setProducts(
                    querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            });
        };
        const getCustomers = () => {
            const q = query(collection(db, "customers"));
            onSnapshot(q, querySnapshot => {
                setCustomers(
                    querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            });
        };
        const getPurchases = () => {
            const q = query(collection(db, "purchases"));
            onSnapshot(q, querySnapshot => {
                setPurchases(
                    querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            });
        };
        getCustomers();
        getProducts();
        getPurchases();
    }, []);
    dispatch({ type: "CUSTOMERS/LOAD", payload: customers });
    dispatch({ type: "PRODUCTS/LOAD", payload: products });
    dispatch({ type: "PURCHASES/LOAD", payload: purchases });

    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<MenuPage />}>
                    <Route path='/products' element={<ProductsPage />} />
                    <Route
                        path='/products/edit/:id'
                        element={<EditProductPage />}
                    />
                    <Route path='/customers' element={<CustomersPage />} />
                    <Route
                        path='/customers/edit/:id'
                        element={<EditCustomerPage />}
                    />
                    <Route path='/purchases' element={<PurchasesPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
