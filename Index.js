const parser = require('./Parser.js');
var table = require('cli-table');
const print = require('./Printer.js');
const sort = require('./Sort.js');
let head1 = ['Year', 'City', 'Team1 Name', 'Team2 Name', 'Result', 'Winner', 'Win By Runs', 'Win By Wickets', 'Player Of the Match'];
let head2 = ['Date', 'City', 'Team1 Name', 'Team2 Name', 'Result', 'Winner', 'Win By Runs', 'Win By Wickets', 'Player Of the Match'];
let team = ['Chennai Super Kings'];
let head3 = ['Team Name', 'Matches', 'Won', 'Lost', 'Tied', 'No Result', 'Points'];
let InputFromUser = process.argv[2];
let InputYear = process.argv[3];
let ValidYears = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
switch (true){
  // Table Displays Data By Sorted Year
  case InputFromUser == 1 && InputYear == null:
    return parser.parsedYear().then((filteredDataForYear)=>{
      sort.sortedYear(filteredDataForYear).then((sortedDataForYear)=>{
        print.PrintData(sortedDataForYear, head1);
      });
    });
    break;
  case InputFromUser == 2 && isNaN(InputYear) === true:
    console.log('Year Must Be Numeric');
    break;
    // Table Dispalys Data By Sorted Date Of Particular Year
  case InputFromUser == 2 && ValidYears.includes(InputYear) == true:
    return parser.parsedDate(InputYear).then((filteredDataForDate)=>{
      sort.sortedDate(filteredDataForDate).then((sortedDataForDate)=>{
        print.PrintData(sortedDataForDate, head2);
      }).catch((err)=>{
        console.log(err);
      });
    });
    break;

  case InputFromUser == 3 && ValidYears.includes(InputYear) == true:
    	return parser.parsedData(InputYear).then((filteredData)=>{
    		//console.log(filteredData);
    		let matches = 0;
    		let win = 0;
    		let tie = 0;
    		let nr = 0;
    		let data = [];
    		let uniqueTeam=[];
    		let finalResult=[];

    		filteredData.forEach((item)=>{
    			if(uniqueTeam.includes(item[4])==false){
    				uniqueTeam.push(item[4]);
    			}
    			if(uniqueTeam.includes(item[5])==false){
    				uniqueTeam.push(item[5]);
    			}
    			
    			if (item[10] == team){
    				win++;
    			}
    			if (item[4] == team || item[5] == team){
    				matches++;
    			}
    			if (item[4] == team || item[5] == team && item[7] == 'tie'){
    				tie++;
    			}
    			if (item[4] == team || item[5] == team && item[7] == 'no result'){
    				nr++;
    			}

    		});
    			let matchesPlayed=[];
    			filteredData.map((item)=>{
    			return matchesPlayed.push(item[4],item[5]);
    		})

    		   				let matchCount = matchesPlayed.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, []);
    		   				let b=[];
    		   				let a=Object.values(matchCount);
    		   				var i =1;
    		   				a.forEach((item)=>{
		   						b.push(item);
    		   					
    		   				});

    		   				// console.log(Object.values(matchCount))
    		   				// console.log(uniqueTeam)
    		   				// return false
    		   				// return false
    		   				//console.log(matchCount)
    		   				// return false;
    		   				// let b=a.map((item)=>{
    		   				// 	console.log(item);
    		   				// })
    		   				// console.log(b);
    		   				console.log(uniqueTeam)
    		   				// return false

    		const dataForTable=uniqueTeam.map(row=>row.split(','));
    		dataForTable.forEach((item)=>{                                    
    			finalResult.push([item[0],b]);
    		})
    		console.log(finalResult);
    		console.log(dataForTable)
    		//console.log(uniqueTeam);
    		// return false;

    		let winner=filteredData.map((item)=>{

    			 return item[10];
    			 	
    			 
    			
    				
    			
    		});
    	
    		// let winCount=winner.reduce(function(allteams,teams){
    		// 	if(team in allteams){
    		// 		allteams[teams]++;
    		// 	}
    		// 	else {
    		// 		allteams[teams]=1;
    		// 	}
    		// 	return allteams;
    		// },{});
    		let winCount = winner.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, []);
 
    		console.log(matchCount);
    		let count=[];
    		count.push(Object.values(matchCount));
    		console.log(count[0])
    		// count.forEach((item)=>{
    		// 	// console.log(item[0],item[1])
    		// })
    		//console.log(matchesPlayed);
    		//console.log(winCount);
    		//console.log(winner)

    		// })
    		uniqueTeam.forEach((item)=>{
    			 winner.includes(item);
    		})
    		
    		
    		

    		
    		
    		 // console.log(winner.length);
    		 //console.log(uniqueTeam);
    		// console.log(win)
    		


    	
    		

    		let lost = matches - (win + tie);
    		if (lost < 0){
    			lost = 0;
    		}
    		let points = (win * 2) + (tie * 1) + (nr * 1);
    		(data).push(['-', matches, win, lost, tie, nr, points]);
    		console.log(data)
    		print.PrintData(finalResult, head3);
    			
    	}).catch((err)=>{
    		console.log(err);
    	});
    break;
  case InputFromUser == 2 && ValidYears.includes(InputYear) == false:
    console.log('No Data Available For This Year(Year Must Be 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017)');
    break;
  default:
    console.log('Invalid Choice');
    console.log('Please Choose An Option:\n' + '1) Enter node Index.js 1 To Get Data Sorted By Year\n' + '2) Enter node Index.js 2 Year To Get Data Sorted By Date Of Particular Year');
}
