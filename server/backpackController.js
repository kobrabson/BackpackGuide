module.exports = {
	getBackpackSize: async (req, res) => {
		const db = req.app.get('db');
		const backpacks = await db.backpack_to_user.get_backpack_sizes();
		res.status(200).send(backpacks);
	},

	getPack: async (req, res) => {
		const db = req.app.get('db');
		const { id } = req.params;
		const backpack_gear = await db.backpackgear_to_backpack.backpackgear_to_backpack(id);
		res.status(200).send(backpack_gear);
	},

	addToPack: async (req, res) => {
		const db = req.app.get('db');
		const { id } = req.params;
		const { gear_id } = req.body;
		const { user_id } = req.session.user;
		await db.backpackgear_to_backpack.add_to_backgear(id, gear_id, user_id);
		const backpack_gear = await db.backpackgear_to_backpack.backpackgear_to_backpack(id);
		res.status(200).send(backpack_gear);
	}
};
