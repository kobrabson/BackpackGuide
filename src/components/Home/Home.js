import React from 'react';
import './Home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown } from 'react-bootstrap';

function Home() {
	return (
		<div>
			<h1>HOME PAGE</h1>
			<Dropdown>
				<Dropdown.Toggle>Dropdown</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>helle</Dropdown.Item>
					<Dropdown.Item>world</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}

export default Home;
