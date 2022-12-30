import "./index.css";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query } from "firebase/firestore";
import db from "./utils/firebase";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsPage from "./pages/ProductsPage";
import EditProductPage from "./pages/EditProductPage";
import CustomersPage from "./pages/CustomersPage";
import EditCustomerPage from "./pages/EditCustomerPage";
import PurchasesPage from "./pages/PurchasesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import MenuComp from "./Components/MenuComp";
import isLoggedInReducer from "./reducers/isLoggedReducer";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const isAuthenticated = useSelector(
        state => state.isLoggedInReducer.currentUser.isAuthenticated
    );
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
        const getCustomers = async () => {
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
        <>
            <MenuComp />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                {isAuthenticated ? (
                    <>
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
                    </>
                ) : null}
            </Routes>
        </>
    );
}

export default App;
