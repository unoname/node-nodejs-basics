export const parseEnv = () => {
	const envVar = process.env;
	const arrNameVariable = Object.keys(envVar);
	arrNameVariable.map(key => {
		 if(/RSS_/.test(key)) {
			 console.log(`${key}=${envVar[key]}`);
		 }
	 }) 	 
};
parseEnv();



 