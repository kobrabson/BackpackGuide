import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ! ----- bootstrap imports ----- !//

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

function Backpack() {
	const [ pack, setPack ] = useState([]);
	const [ selectedPack, setSelectPack ] = useState({});

	useEffect(() => {
		axios
			.get('/api/backpackSize')
			.then((res) => {
				setPack(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>backpacks</h1>
			<div>
				{pack.map((packSize, index, array) => {
					return (
						<div key={index}>
							<Dropdown>
								<Dropdown.Toggle className="packSizeDropdown">Choose your pack size</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={() => setSelectPack(packSize)}>
										<h6>{packSize.backpack_weight}</h6>
										<h6>{packSize.backpack_desciption}</h6>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					);
				})}
			</div>

			<div>
				<h1>Selected pack size</h1>
			</div>
		</div>
	);
}

export default Backpack;
