import React, {useState} from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Nav.css';

function Dropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);


    return (
        <div
        className="display-ib"
        tabIndex={0}
        role="button"
        onKeyPress={()=> toggle(!open)}
        onClick={()=> toggle(!open)}
        >
            
            <div className='nav-action navbar-item' >
                <p>{open ? 'Close' : 'Open' }</p>
            </div>
            {open && (
                <div className='nav-list-item'>
                    <Link to='/about' className='nav-ul'>About</Link>
                    <Link to='/gear'><ul className='nav-ul'>Gear</ul></Link>
                    <Link to='/backpack'><ul className='nav-ul'>Backpack</ul></Link>
                    <Link to='/resource'><ul className='nav-ul'>Addition Resources</ul></Link>
                    <Link to='/Auth'><ul className='nav-item'>Register</ul></Link>
                </div>
            
            )}
        </div>
    )
}

export default withRouter(Dropdown)
