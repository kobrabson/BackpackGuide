import React, {useState} from 'react'

function Dropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);


    return (
        <div
        tabIndex={0}
        role="button"
        onKeyPress={()=> toggle(!open)}
        onClick={()=> toggle(!open)}
        >
            <div>
                <p></p>
            </div>
            <div className='nav-action' >
                <p>{open ? 'Close' : 'Open' }</p>
            </div>
            {open && (
                <ul>
                          <item>About</item>
                        <item>Gear</item>
                        <item>Backpack</item>
                        <item>Addition Resources</item>
                        <item>Register</item>
                </ul>
            )}
        </div>
    )
}

export default Dropdown
