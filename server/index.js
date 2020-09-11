require('dotenv').config();
(express = require('express')), (massive = require('massive')), (session = require('express-session'));

const authCtrl = require('./authController');
const packCtrl = require('./backpackController');
const gearCtrl = require('./gearController');

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
		}
	})
);

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false }
})
	.then((db) => {
		app.set('db', db);
		console.log('<-----Database Online----->');
	})
	.catch((err) => console.log(`Database error: ${err}`));

//  AUTH END POINTS
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.getUser);

// GEAR END POINTS
app.get('/api/gear', gearCtrl.getAllGear);
app.post('/api/gear', gearCtrl.addGear);
app.delete('/api/gear/:id', gearCtrl.deleteGear);

// I MAY NOT USE PUT METHOD
// app.put("/api/gear", gearCtrl.editGear)

// BACKPACK SIZE END POINT
app.get('/api/backpackSize', packCtrl.getBackpackSize);

// PACK END POINT
app.get('/api/pack/:id', packCtrl.getPack);
app.post('/api/pack/:id', packCtrl.addToPack);
app.delete('/api/pack/:id', packCtrl.deleteFromPack);

app.listen(SERVER_PORT, () => console.log(`<-----Server Online port ${SERVER_PORT}----->`));
