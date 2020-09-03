
module.exports = {
    getBackpackSize: async (req, res) => {
        const db = req.app.get("db");
        const backpacks = await db.backpack_to_user.get_backpack_sizes();
        res.status(200).send(backpacks)
    },

    getPack: async (req, res) => {
        const db = req.app.get("db");
        const backpack_gear = await db.backpackgear_to_backpack.backpackgear_to_backpack();
        res.status(200).send(backpack_gear)
    },

    // addToPack: async (req, res) => {
    //     const db = req.app.get("db");

    // }

}