import Express, { Application } from 'express';
import morgan from 'morgan';
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
		await this.app.listen(9990);
		console.log('Server on port 9990');
	}

	/*
  settings(){
    this.app.set('port',this.port || process.env.PORT || 3000);
  }
  */

	routes() {
		this.app.use('/create', createToken);
		this.app.use('/validate', validateToken);
	}

	middlewares() {
		this.app.use(morgan('dev'));
		this.app.use(Express.json());
	}
}
