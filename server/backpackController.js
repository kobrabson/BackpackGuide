
module.exports = {
    getBackpackSize: async (req, res) => {
        const db = req.app.get("db");
        const backpacks = await db.backpack_to_user.get_backpack_sizes();
        res.status(200).send(backpacks)
    }
}