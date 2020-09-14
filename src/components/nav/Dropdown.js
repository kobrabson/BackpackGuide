import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Nav.css';

function Dropdown() {
	const [ open, setOpen ] = useState(false);
	const toggle = () => setOpen(!open);

	return (
		<div
			className="display-ib"
			tabIndex={0}
			role="button"
			onKeyPress={() => toggle(!open)}
			onClick={() => toggle(!open)}
		>
			<div className="nav-action navbar-item">
				<p className="open-menu dropdown-toggle">{open ? 'Close' : 'Open'}</p>
			</div>
			{open && (
				<div className="nav-list-item">
					<Link to="/about" className="nav-item links">
						About
					</Link>
					<div class="dropdown-divider" />
					<Link className="links" to="/gear">
						<ul className="nav-item">Gear</ul>
					</Link>
					<div class="dropdown-divider3" />
					<Link className="links" to="/backpack">
						<ul className="nav-item">Backpack</ul>
					</Link>
					<div class="dropdown-divider" />
					<Link className="links" to="/resource">
						<ul className="nav-item">Addition Resources</ul>
					</Link>
					<div class="dropdown-divider" />
					<Link className="links" to="/Auth">
						<ul className="nav-item">Register</ul>
					</Link>
					<div class="dropdown-divider" />
				</div>
			)}
		</div>
	);
}

export default withRouter(Dropdown);
