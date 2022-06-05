import { cpus } from 'os';
import { Worker, workerData } from 'worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.join(__dirname, 'worker.js');
const amountCPU = cpus().length + 10;

export const performCalculations = async () => {    
			let worker_1 = new Worker(srcFile, {workerData: 10});
		let worker_2 = new Worker(srcFile, {workerData: 11});
		let worker_3 = new Worker(srcFile, {workerData: 12});
		let worker_4 = new Worker(srcFile, {workerData: 13});
		let result = [];
		
			worker_1.on('message', (msg) => {
				result.push(msg);				
			})
			worker_2.on('message', (msg) => {
				result.push(msg);				
			})
			worker_3.on('message', (msg) => {
				result.push(msg);				
			})
			worker_4.on('message', (msg) => {
				result.push(msg);
				console.log(result.sort());
			})		
};
performCalculations()