
module.exports = {
    getAllGear: async (req, res) => {
        const db = req.app.get("db")
        const gear = await db.gear.get_gear()
        res.status(200).send(gear)
    },

    addGear: async (req, res) => {
        const db = req.app.get("db");
        const { name, weight, description, gear_genre, image } = req.body;
        const gear = await db.gear.add_gear([
            name,
            weight,
            description,
            gear_genre,
            image
        ]);
        res.status(200).send(gear);
    },

    deleteGear: async (req, res) => {
        const { id } =req.params;
        const db =req.app.get("db");

        const gear = await db.gear.delete_gear([id]);

        res.status(200).send(gear);
    }



    // getGear: (req, res) => {
    //     const db = req.app.get("db")
    //     res.status(200).send(gear)
    // }
}