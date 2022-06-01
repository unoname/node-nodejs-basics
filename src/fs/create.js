import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
  		await fs.writeFile(srcFile, 'I am fresh and young', {flag: 'ax'}, (err) => {				
					if(err) {						
						console.error('FS operation failed')
					}
			});		
};
create();
