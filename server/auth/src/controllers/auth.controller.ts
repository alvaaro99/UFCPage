import { Request, Response } from 'express';
import { connect } from '../database';
var jwt = require('jsonwebtoken');

export function createToken(req: Request, res: Response) {}

export async function validateToken(req: Request, res: Response) {
	const connection = connect();

	//example
	//const posts = await connection.query('SELECT * FROM posts');
}
