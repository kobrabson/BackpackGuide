import React, { useState, useEffect } from 'react';
// import Categories from './Categories';
import Axios from 'axios';
import { connect } from 'react-redux';
// import { addGear } from '../../redux/reducer';
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
	// const [ isChecked, setIsChecked ] = useState();
	// const [ addGear, setAddGear ] = useState(gear_id);

	useEffect(() => {
		Axios.get('/api/gear')
			.then((res) => {
				setGear(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const addGear = (gear_id) => {
		Axios.post(`/api/pack/${props.reducer.selectedPack.backpack_id}`, { gear_id })
			.then((res) => {
				// !-----might need something else or more to effect here-----!//
				setGear(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="gear-container mt-5 ">
			<div className="multi-select bg-white mb-5 pb-3">
				<ReactMultiSelectCheckboxes
					dropdownButton={{ right: 0 }}
					placeholderButtonLabel="Categories"
					options={options}
				/>
			</div>
			<div>
				{gear.map((gear, index, array) => {
					return (
						<div className="card d-inline-block m-2">
							<div className="" key={index}>
								<img className="card-img-top gear-images mt-1" src={gear.image} alt={gear.image} />
								<h5 className="card-body descr">
									{gear.name} {gear.weight}
									{gear.unit}, {gear.description}
								</h5>

								<button className="btn btn-color text-dark mb-2" onClick={() => addGear(gear.gear_id)}>
									Add to pack
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Gear);
