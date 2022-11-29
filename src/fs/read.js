import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async (src) => {
   const data = await fs.readFile(src);
	 const result = data.toString();
	 console.log(result);
};
 read(pathFile).catch(err => {
	 if(err) {
		console.error('FS operation failed');
	}
 })