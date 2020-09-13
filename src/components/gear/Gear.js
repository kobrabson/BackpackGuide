import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Gear.css';

const Gear = (props) => {
	const [ gear, setGear ] = useState([]);

	const [ input, setInput ] = useState({});

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		axios
			.get('/api/gear')
			.then((res) => {
				setGear(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const addGear = (gear_id) => {
		axios
			.post(`/api/pack/${props.reducer.selectedPack.backpack_id}`, { gear_id })
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

			<div className=" input-fields input-group mx-auto mb-3" style={{ width: '700px' }}>
				<input
					type="text"
					value={gear.name}
					onChange={handleChange}
					className="form-control mb-3 mr-5 ml-5"
					placeholder="name of item"
				/>

				<div className="input-group mb-3 pr-5 pl-5">
					<input
						type="text"
						value={gear.weight}
						onChange={handleChange}
						className="form-control"
						placeholder="weight of item"
					/>
					<div className="input-group-append">
						<span className="input-group-text" id="basic-addon2">
							oz
						</span>
					</div>
				</div>

				<div className="input-group pr-5 pl-5">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroupFileAddon1">
							Upload
						</span>
					</div>
					<div className="custom-file">
						<input
							type="file"
							value={gear.image}
							onChange={handleChange}
							className="custom-file-input"
							id="inputGroupFile01"
						/>
						<label className="custom-file-label" htmlFor="inputGroupFile01">
							Choose file
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Gear);
