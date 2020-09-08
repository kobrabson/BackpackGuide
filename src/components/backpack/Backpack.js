import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Backpack() {
    const[pack, setPack] = useState([]);

    

    useEffect (() => {
        axios.get('/api/backpackSize')
        .then((res) => {
            setPack(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);



    return (
        <div>
            <h1>backpacks</h1>
            <div>
                {pack.map((packSize, index, array) => {
                    return (
                        <div key={index}>
                            <h1>{ packSize.backpack_weight}</h1>
                            <h1>{ packSize.backpack_desciption}</h1>
                        </div>
                     )
                })}
            </div>
            <div></div>
        </div>
    )
}

export default Backpack
