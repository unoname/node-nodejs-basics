import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dest = path.join(__dirname, 'files', 'fileToCompress.txt');
const src = path.join(__dirname, 'files', 'archiv.gz');

export const decompress = async () => {
   const readStream = createReadStream(src);
	const writeStream = createWriteStream(dest)
   const unzip = createUnzip();
	  pipeline(readStream, unzip, writeStream, (err) => {
		 if(err) {
			throw err;
		 }
	 })  
};

decompress(src, dest)