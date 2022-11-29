import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin } from 'process';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async (src) => {
   const writable = fs.createWriteStream(src);
pipeline(stdin, writable, err => {
	console.error(err);
})
};

write(pathFile);