import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');


export const read = async () => {
	const readable = fs.createReadStream(pathFile);
   readable.on('data', (data) => {		 
    stdout.write(data.toString());
	 })
};

read();