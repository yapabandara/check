import React, {useState, useEffect} from "react";
import axios from "axios";

export default function AllCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        function getCustomers() {
            axios.get("http://localhost:8070/customer/fetch").then((res) => {
                
                setCustomers(res.data);

            }).catch((err) => {
                
                alert(err.message);
            })
        }

        getCustomers()
    }, [])

    return (
        <div>
            <h1>All Customers</h1>
        </div>
    )
}