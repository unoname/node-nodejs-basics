import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async (src) => {
   await fs.rm(src);
};

remove(pathFile).catch(err => {
	if(err) {
		console.error('FS operation failed');
	}
})