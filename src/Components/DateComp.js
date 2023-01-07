import { useState, useEffect } from "react";

const DateComp = ({ date }) => {
    const [currentDate, setCurrentDate] = useState("");
    const purchaseDate = date.toDate();

    useEffect(() => {
        const getDate = () => {
            const date = purchaseDate;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            setCurrentDate(currentDate);
        };
        getDate();
    }, []);
    return <tr>{currentDate}</tr>;
};

export default DateComp;
