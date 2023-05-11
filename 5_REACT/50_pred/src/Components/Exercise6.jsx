import { useState, useEffect } from "react"

export default function Exercise6() {

    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <h1>Exercise 6</h1>
            <p>Your task is to fetch and show data from jsonplaceholder.typecode.com/users/1.</p>
            <div>
                <p>User data</p>
                <p>Name: {data.name}</p>
                <p>Website: {data.website}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
            </div>
        </div>
    )
}