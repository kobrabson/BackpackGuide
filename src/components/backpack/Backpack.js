import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectPack } from '../../redux/reducer';
import './Backpack.css';

// ! ----- bootstrap imports ----- !//

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown } from 'react-bootstrap';

function Backpack(props) {
	const [ pack, setPack ] = useState([]);
	const [ myGear, setMyGear ] = useState([]);

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

	useEffect(
		() => {
			axios
				.get(`/api/pack/${props.reducer.user.user_id}`)
				.then((res) => {
					setMyGear(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[ props.reducer.user.user_id ]
	);
	console.log(props.reducer.user.user_id);
	return (
		<div>
			<h1>backpacks</h1>
			<div>
				{pack.map((packSize, index, array) => {
					return (
						<div className="d-inline-flex justify-content-center flow-row" key={index}>
							<div className="btn-toolbar d-inline-flex justify-content-center flow-row" role="toolbar">
								<button
									onClick={() => props.selectPack(packSize)}
									type="button"
									className="btn btn-secondary m-2"
								>
									{packSize.backpack_weight}
								</button>
							</div>
						</div>
					);
				})}
			</div>

			<div className="">
				<h1>Your Pack</h1>
				<h2>
					{myGear.reduce((a, e) => {
						return (a += parseFloat(e.weight));
					}, 0)}{' '}
					/
				</h2>
				<h2>{props.reducer.selectedPack.backpack_weight}</h2>
				<div className="d-inline-block flex-row m-2">
					{myGear.map((myGear, i, array) => {
						return (
							<div className="card d-inline-block flex-row m-2" key={i}>
								<img
									className="my-gear-image card-img-top p-3"
									key={i}
									src={myGear.image}
									alt={myGear.image}
								/>
								<h5 className="card-body">
									{myGear.name} {myGear.weight}
									{myGear.unit}
								</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { selectPack })(Backpack);
