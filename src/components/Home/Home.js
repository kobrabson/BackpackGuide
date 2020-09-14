import React from 'react';
import background from '../image/backgroundImage.jpg';
import tent from '../image/tent.jpg';
import hammock from '../image/hammock.jpg';
import './home.css';

function Home() {
	return (
		<div className="bg-dark">
			<div>
				<p className=" text text-white"> Found out how much you should carry </p>
				<a
					className="home-link"
					href="https://explorationsolo.com/how-much-weight-should-you-carry-backpacking/"
					target="_blank"
				>
					here
				</a>
				<img className=" bg mt-3" src={background} alt="backgroundImage" />
			</div>

			<div className="container mt-5 pb-5">
				<div className="row">
					<div className="col">
						<a href="https://www.backpacker.com/gear/the-5-best-car-camping-tents-of-2020" target="_blank">
							<p className="tent-text">5 best tents of 2020</p>
							<img className="w-100" src={tent} alt="tent" />
						</a>
					</div>
					<div className="col">
						<a href="https://kammok.com/pages/hammock-camping-101" target="_blank">
							<p className="hammock-text">Hammock Camping 101</p>
							<img className="hammock" src={hammock} alt="tent" />
						</a>
					</div>
					<div className="w-100" />
					<div className="col" />
					<div className="col" />
				</div>
			</div>
		</div>
	);
}

export default Home;
