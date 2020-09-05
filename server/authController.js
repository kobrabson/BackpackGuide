const bcrypt = require("bcryptjs")

module.exports = {
    register: async (req, res) => {
        const { email, password } = req.body
        const db = req.app.get("db");

        let foundUser = await db.user.get_user([email]);

        if(foundUser[0]) {
            res.status(404).send('user already exists')
        } else {
            const salt = bcrypt.genSaltSync(15);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = await db.user.add_user([email, hash]);
      
            req.session.user = newUser[0];
            res.status(201).send(newUser[0]);
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get("db");
        let foundUser = await db.user.get_user(email);
        foundUser = foundUser[0];
        if (foundUser) {
          const comparePassword = foundUser.password;
          const authenticated = bcrypt.compareSync(password, comparePassword);
          if (authenticated) {
            delete foundUser.password;
            req.session.user = foundUser;
            res.status(202).send(foundUser);
          }
        } else {
          res.status(401).send("Email or password incorrect");
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

}