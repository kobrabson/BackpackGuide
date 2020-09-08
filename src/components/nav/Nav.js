import React from 'react'
import Dropdown from './Dropdown';
import { logoutUser } from '../../redux/reducer'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './Nav.css'
// import Axios from 'axios';

const Nav = (props) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    // const logout = () => {
    //     Axios.get('/auth/logout')
    //     .then((res) => {
    //         props.logoutUser()
    //         props.history.push('/')
    //     })
    //     .catch((err) => console.log(err));
    // }
    

    return (
        <div>
            <nav className='navbar display-ib'>
                <div className='logo'>
                    {/* logo box */}
                </div>

                <div 
                    className='title display-ib'>
                        Backpack Guide
                </div>

                <div className='nav-container'>
{/* 
                    {isLoggedIn ? false (
                        <Link to='/Auth'>
                            <button 
                                className='login navbar-item'
                                onClick={() => setIsLoggedIn(!isLoggedIn)}
                                        > Login </button></Link>
                     ) : true (
                         <button 
                         className='login navbar-item'
                         onClick={() => logout}
                        > Logout </button>
                     )} */}


                <Link to='/about'>
                    <span 
                        className='header-item'>
                         about
                    </span></Link>
                
               
                <Dropdown/>

                </div>
                
            </nav>
            
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser})(Nav)
