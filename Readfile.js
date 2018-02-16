const fs = require('fs');
module.exports={
	fileData(){
		
	fs.readFile('matches.csv', 'utf-8', (err, data)=>{
	  if (err){
	    console.log(`Error Occured:${err}`);
	    return;
	  }

	  return data;
	});
}
}