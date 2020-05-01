import { Request, Response } from 'express';
const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');

export function createToken(req: Request, res: Response) {
	const id = req.body['id'];
	const encryptedToken = jwt.sign({ id }, 'ufc-page', { expiresIn: '6h' });

	res.status(httpStatus.OK).send({ token: `Bearer ${encryptedToken}` });
}

export async function validateToken(req: Request, res: Response) {
	const token = (req.body['token'] as string).split(' ')[1];
	try {
		const decodedToken = jwt.verify(token, 'ufc-page');
		return res.status(httpStatus.OK).send(decodedToken);
	} catch (error) {
		return res.status(httpStatus.FORBIDDEN).send({ message: error.message });
	}
}
