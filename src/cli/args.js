export const parseArgs = () => {
	 const args = process.argv;
	 for(let i = 2; i < args.length; i+=2) {
		 let propName = args[i].replace(/-*/, '');
			 console.log(`${propName} is value: ${args[i+1]}`);		 
	 }	 
	};

parseArgs();