import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express();
		const port = 4000;

				app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use (cors());
		app.use(router);		
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	.catch(() => console.log('Erro ao conectar no mongoDb'));