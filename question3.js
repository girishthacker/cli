const parser = require('./Parser.js');
const print = require('./Printer.js');
let head3 = ['Team Name', 'Matches', 'Won', 'Lost', 'Tied', 'No Result', 'Points'];
let ValidYears = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
let InputFromUser = process.argv[2];
let InputYear = process.argv[3];
switch (true){
  case InputFromUser == 3 && ValidYears.includes(InputYear) == true:
    	return parser.parsedData(InputYear).then((filteredData)=>{
    		let matches = 0;
    		let win = 0;
    		let tie = 0;
    		let nr = 0;
    		let finalResult = [];
      let teams = [];
      filteredData.forEach((item)=>{
        return teams.push(item[4], item[5]);
      });
       //console.log(teams);
    		filteredData.forEach((item,i)=>{
        if (finalResult.includes(item[4]) == false){
          finalResult.push(item[4]);
        }
        if (finalResult.includes(item[5]) == false){
          finalResult.push(item[5]);
        }
        if(item[10]==item[4]){
          win[item[4]]++;
        }
    		});
        console.log(win)
      const dataForTable = finalResult.map(row=>row.split(','));


    		 print.PrintData(dataForTable, head3);
    	}).catch((err)=>{
    		console.log(err);
    	});
    break;
}

