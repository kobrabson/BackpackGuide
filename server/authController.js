const bcrypt = require('bcryptjs');

module.exports = {
	register: async (req, res) => {
		const db = req.app.get('db');
		const { email, password } = req.body;
		const existingUser = await db.user.get_user(email);
		if (existingUser[0]) {
			return res.status(409).send('User already exists');
		}
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		const [ newUser ] = await db.user.add_user([ email ]);
		console.log(newUser);
		req.session.user = {
			email: newUser.email,
			user_id: newUser.user_id
		};
		res.status(200).send(req.session.user);
	},

	login: async (req, res) => {
		const db = req.app.get('db');
		const { email, password } = req.body;
		const user = await db.user.get_user(email);
		if (!user[0]) {
			return res.status(401).send('incorrect credentials');
		} else {
			req.session.user = {
				email,
				user_id: user[0].user_id
			};
			// console.log(user[0]);
			// console.log(req.session.user);
			res.status(200).send(req.session.user);
		}
	},

	logout: (req, res) => {
		req.session.destroy();
		res.sendStatus(200);
	},

	getUser: (req, res) => {
		if (req.session.user) {
			res.status(200).send(req.session.user);
		} else {
			res.sendStatus(404);
		}
	}
};
