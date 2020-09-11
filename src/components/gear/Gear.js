import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import './Gear.css';

const Gear = (props) => {
	const [ gear, setGear ] = useState([]);

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
				setGear(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="gear-container mt-5 ">
			<div className="multi-select bg-white mb-5 pb-3" />
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
