import React, {useState, useEffect} from 'react'
import Categories from './Categories'
import Axios from 'axios';


const Gear = () => {


    const [gear, setGear] = useState([]);



    useEffect(() => {
        Axios.get('/api/gear')
        .then((res) => {
            setGear(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

 

    return (
        <div>
            <Categories />
            <h1>GEAR</h1>
            <div>
                {gear.map((gear, index, array) => {
                    return (
                        <div key={index}>
                            <button>Add to pack</button>
                            <h1>{gear.name} { gear.weight }{gear.unit} </h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gear
