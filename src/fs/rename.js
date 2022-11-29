import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldPathFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPathFile = path.join(__dirname, 'files', 'properFilename');

export const rename = async (oldSrc, newSrc) => {
    await fs.rename(oldSrc, newSrc); 
};

rename(oldPathFile, newPathFile).catch(err => {
	if(err) {
		console.error('FS operation failed');
	}
})