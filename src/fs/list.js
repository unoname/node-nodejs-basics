import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathDir = path.join(__dirname, 'files');

export const list = async (src, options) => {    
		const readDir = await fs.readdir(src, options);
		const arrNameFile = [];
	readDir.map(file => {
		arrNameFile.push(file.name);
		});
				console.log(arrNameFile);
};

list(pathDir, {withFileTypes: true}).catch(err => {
	if(err) {
		console.error('FS operation failed');
	}
});