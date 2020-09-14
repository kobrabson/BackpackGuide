import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';
import './Auth.css';

const Auth = (props) => {
	const [ toggle, setToggle ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleEmailInput = (event) => {
		const { value } = event.target;
		setEmail(value);
	};
	const handlePasswordInput = (event) => {
		setPassword(event.target.value);
	};

	const login = () => {
		axios
			.post('/auth/login', {
				email: email,
				password: password
			})
			.then((res) => {
				props.loginUser(res.data);
				props.history.push('/backpack');
			})
			.catch((err) => {
				alert('email or password incorrect');
			});
	};

	const register = () => {
		axios
			.post('/auth/register', {
				email: email,
				password: password
			})
			.then((res) => {
				props.loginUser(res.data);
				props.history.push('/backpack');
			})
			.catch((err) => {
				alert('email already registered');
			});
	};

	return (
		<div className=" mt-5 mx-auto w-50 card">
			<h1>{toggle ? 'Login' : 'Register'}</h1>
			<div className="form-group">
				<input
					className="form-control w-75 mx-auto"
					name="email"
					placeholder="email"
					value={email}
					onChange={handleEmailInput}
				/>
				<input
					className="form-control w-75 mx-auto"
					name="password"
					placeholder="password"
					value={password}
					onChange={handlePasswordInput}
					type="password"
				/>
				{toggle ? (
					<div>
						<button className=" btn-color text-dark btn mt-2 w-25 " type="submit" onClick={login}>
							Login
						</button>
						<br />
						<button
							className="btn btn-color btn-dark text-dark mt-2"
							onClick={() => {
								setToggle(!toggle);
							}}
						>
							Haven't signed up? Click to register
						</button>
					</div>
				) : (
					<div>
						<button onClick={register}>Register</button>
						<button
							onClick={() => {
								setToggle(!toggle);
							}}
						>
							Already signed up? Click to login
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Auth);
