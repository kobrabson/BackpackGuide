import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectPack } from '../../redux/reducer';

// ! ----- bootstrap imports ----- !//

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

function Backpack(props) {
	const [ pack, setPack ] = useState([]);

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
	console.log(props.reducer.selectedPack);
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
									<Dropdown.Item onClick={() => props.selectPack(packSize)}>
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
				<h2>{props.reducer.selectedPack.backpack_desciption}</h2>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { selectPack })(Backpack);
