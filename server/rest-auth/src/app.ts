import Express, { Application } from 'express';
import morgan from 'morgan';
const cors = require('cors');
import { createToken, validateToken } from './controllers/auth.controller';
export class App {
	private app: Application;
	constructor() {
		this.app = Express();
		this.listen();
		this.middlewares();
		this.routes();
	}

	async listen() {
		await this.app.listen(9999);
		console.log('Server on port 9999');
	}

	routes() {
		this.app.post('/create', createToken);
		this.app.post('/validate', validateToken);
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(morgan('dev'));
		this.app.use(Express.json());
	}
}
