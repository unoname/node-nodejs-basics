import { fork } from 'child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin as readable, stdout as writable } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const args = process.argv.slice(2);
const srcChild = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args, src) => {
    const childProcess = fork(src, args);		
};

spawnChildProcess(args, srcChild)