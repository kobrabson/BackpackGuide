import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { logoutUser } from '../../redux/reducer';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import Axios from 'axios';

const Nav = (props) => {
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	const logout = () => {
		Axios.post('/auth/logout')
			.then((res) => {
				setIsLoggedIn(!isLoggedIn);
				props.logoutUser();
				props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="nav-bar">
			<nav className="navbar display-ib">
				<div className="logo">{/* logo box */}</div>

				<div className="title display-ib">Backpack Guide</div>

				<div className="nav-container">
					{!isLoggedIn ? (
						<Link to="/Auth">
							<button className="login navbar-item" onClick={() => setIsLoggedIn(!isLoggedIn)}>
								Login
							</button>
						</Link>
					) : (
						<button className="login navbar-item" onClick={() => logout()}>
							Logout
						</button>
					)}

					<Link className="links" to="/about">
						<span className="header-item about">about</span>
					</Link>

					<Dropdown />
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => state;

export default withRouter(connect(mapStateToProps, { logoutUser })(Nav));
