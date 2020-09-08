import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Categories = () => {


    const [gear, setGear] = useState([])
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);


    useEffect(() => {
        axios.get('/api/gear')
        .then((res) => {
            setGear(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])



    return (
        <div
            role="button"
            tabIndex={0}
            onKeyPress={()=> toggle(!open)}
            onClick={()=> toggle(!open)}
        >
            <p>{open ? 'Close' : 'Open'}</p>
            {open && (
                // here where categories goes
                gear.map((categories, index, array) => {
                    return (
                        <div key={index}>
                            <h1>{gear.categories}</h1>
                        </div>
                    )
                })
            )}
            <h1>CATEGORIES</h1>
        </div>
    )
}

export default Categories
