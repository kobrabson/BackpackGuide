import React, { useState, useEffect } from 'react';
// import Categories from './Categories';
import Axios from 'axios';
import { connect } from 'react-redux';
import { addGear } from '../../redux/reducer';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './Gear.css';

const Gear = (props) => {
	const options = [
		{ label: 'Fire', value: 1 },
		{ label: 'Navigation', value: 2 },
		{ label: 'Lamps and Light', value: 3 },
		{ label: 'Knives and Tools', value: 4 },
		{ label: 'Cooking', value: 5 },
		{ label: 'Dry Food', value: 6 },
		{ label: 'Shelter', value: 7 },
		{ label: 'Sleep', value: 8 },
		{ label: 'Hydration', value: 9 },
		{ label: 'Storage', value: 10 },
		{ label: 'Toiletries', value: 11 },
		{ label: 'Clothing', value: 12 },
		{ label: 'Footwear', value: 13 },
		{ label: 'Trekking Gear', value: 14 },
		{ label: 'Weather Protection', value: 15 },
		{ label: 'First-Aid and Emergency', value: 16 },
		{ label: 'Protection', value: 17 },
		{ label: 'Repair Kit', value: 18 }
	];

	const [ gear, setGear ] = useState([]);
	const [ addGear, setAddGear ] = useState({});

	useEffect(() => {
		Axios.get('/api/gear')
			.then((res) => {
				setGear(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		Axios.post('/api/pack/:id')
			.then((res) => {
				setAddGear(res.data);
				// !-----might need something else or more to effect here-----!//
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="gear-container">
			<div className="multi-select">
				<ReactMultiSelectCheckboxes
					dropdownButton={{ right: 0 }}
					placeholderButtonLabel="Categories"
					options={options}
				/>
			</div>
			<div>
				{gear.map((gear, index, array) => {
					return (
						<form className="form-inline justify-content-center ">
							<div className="form-group d-flex justify-content-between " key={index}>
								<button className="form-control" onClick={() => addGear()}>
									Add to pack
								</button>
								<h5 className="form-control">
									{gear.name} {gear.weight}
									{gear.unit}
								</h5>
							</div>
						</form>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { addGear })(Gear);
