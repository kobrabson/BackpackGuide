import React, {useState} from 'react'
import './Nav.css'

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
                          <ul className='nav-ul'>About</ul>
                        <ul className='nav-ul'>Gear</ul>
                        <ul className='nav-ul'>Backpack</ul>
                        <ul className='nav-ul'>Addition Resources</ul>
                        <ul className='nav-item'>Register</ul>
                </div>
            
            )}
        </div>
    )
}

export default Dropdown
