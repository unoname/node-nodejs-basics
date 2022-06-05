import { createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { createHash } = await import('crypto');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');



export const calculateHash = async (src) => {
    const hash = createHash('sha256');
    const input = createReadStream(src);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

calculateHash(pathFile)