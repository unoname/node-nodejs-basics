import { Transform, pipeline } from 'stream';
import { stdin as readable, stdout as writable } from 'process';

export const transform = async () => {
   const myTransform = new Transform({
		 transform(chunk, enc, cb) {
			 const chunkStringFied = chunk.toString().trim();
			 const reverseChunkStringFied = chunkStringFied.split('').reverse().join('');
			 cb(null, reverseChunkStringFied + '\n')
		 }
	 })
	 pipeline(
		 readable,
		 myTransform,
		 writable,
		 err => {
			 console.error(err);
  })
};

transform()