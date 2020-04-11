import { Request, Response } from 'express';
const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');

export function createToken(req: Request, res: Response) {
	const id = req.body['id'];
	const token = jwt.sign(id, 'ufc-page');

	return res.status(httpStatus.OK).send(`Bearer ${token}`);
}

export async function validateToken(req: Request, res: Response) {
	//el postman pone 'authorization' y da undefined
	if (!req.headers['Authorization'])
		return res.status(httpStatus.FORBIDDEN).send('Usuario no logueado');
	const token = (req.headers['Authorization'] as string).split(' ')[1];
	try {
		const decodedToken = jwt.verify(token, 'ufc-page');
		return res.status(httpStatus.OK).send(decodedToken);
	} catch (error) {
		return res.status(httpStatus.FORBIDDEN).send('Token invalido');
	}
}
