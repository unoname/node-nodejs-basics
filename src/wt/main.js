import { cpus } from 'os';
import { Worker, workerData } from 'worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.join(__dirname, 'worker.js');
const numberCpus = cpus();

export const performCalculations = async () => {   
	 let results = [];
	for(let i = 10; i < numberCpus.length + 10; i++) {
		results.push(await new Promise((res) => {
		let worker = new Worker(srcFile, {workerData: i});	
			worker.on('message', (msg) => {
				res({status: 'resolved', data: msg});				
			})
			worker.on('error', () => {				
				res({status: 'rejected', data: null})		        
			 })
		 })
		)	
	}
	console.log(results);
};
performCalculations()