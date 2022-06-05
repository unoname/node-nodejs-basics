import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, 'files', 'fileToCompress.txt');
const dest = path.join(__dirname, 'files', 'archiv.gz');

export const compress = async (src, dest) => {
	const readStream = createReadStream(src);
	const writeStream = createWriteStream(dest)
   const zip = createGzip();
	  pipeline(readStream, zip, writeStream, (err) => {
		 if(err) {
			throw err;
		 }
	 })  
};
compress(src, dest);