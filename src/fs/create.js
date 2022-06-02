import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.join(__dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

export const create = async (src, data, flag) => {
	await fs.appendFile(src, data, flag)  		
};
create(srcFile, data, {flag: 'ax'}).catch(err => {
	if(err) {
		console.error('FS operation failed');
	}
});
