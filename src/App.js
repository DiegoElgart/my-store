import "./index.css";
import { useState, useEffect } from "react";
import { doc, onSnapshot, collection, query } from "firebase/firestore";
import db from "./utils/firebase";
import MenuPage from "./Components/MenuPage";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./Components/ProductsPage";

function App() {
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
            const q = query(collection(db, "Purchases"));
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
    }, []);
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<MenuPage />} />
                <Route path='/products' element={<ProductsPage />} />
            </Routes>
        </div>
    );
}

export default App;