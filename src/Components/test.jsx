import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
            .post('https://reqres.in/api/users', {
                name: 'Huy',
                job: 'IT',
            })
            .then((res) => {
                // setInfo(res.data.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            {/* {info.map((index) => (
                <p key={index.id}>{index.email}</p>
            ))} */}
            {info.map((index) => (
                <p key={index.id}>{index.email}</p>
            ))}
        </>
    );
};

export default Test;
