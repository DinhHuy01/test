import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = () => {
    


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
