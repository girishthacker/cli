const fs = require('fs');
module.exports = {
  parsedYear () {
    return new Promise((resolve, reject)=>{
      fs.readFile('matches.csv', 'utf-8', (err, data)=>{
        if (err){
          reject(err);
        } 
        //Converts String Into Array And Ignore Empty Line
        const rows = data.split('\n').filter(row=>!!row);
        //Ignore Header
        rows.shift();
        const dataForTable = rows.map(row=>row.split(','));
        let filteredData = dataForTable.map((item)=> {
          //Returns Parsed Formatted Matches
          return ([item[1], item[2], item[4].match(/\b(\w)/g).join(''), item[5].match(/\b\w/g).join(''), item[8], item[10], item[11], item[12], item[13]]);
        });
        resolve(filteredData);
      });
    });
  },
  parsedDate (UserInput) {
    return new Promise((resolve, reject)=>{
      fs.readFile('matches.csv', 'utf-8', (err, data)=>{
        if (err){
          reject(err);
        }
        const rows = data.split('\n').filter(row=>!!row);
        //Ignore Header
        rows.shift();
        const dataForTable = rows.map(row=>row.split(','));
        let filteredData = [];     
        dataForTable.map((item)=> {
          //Extracts Year
          let year = (item[3].split('-'));
          let winner = item[10]!='' ? item[10].match(/\b(\w)/g).join('') : '-';
          //Matches Year With UserInput
          if (year[0] == UserInput){
            //Returns Parsed Formatted Matches
            return filteredData.push([item[3], item[2], item[4].match(/\b(\w)/g).join(''), item[5].match(/\b(\w)/g).join(''), item[8], winner, item[11], item[12], item[13]]);
          }
        });
        resolve(filteredData);
      });
    });
  },
  parsedData(UserInput){
    return new Promise((resolve,reject)=>{
      fs.readFile('matches.csv','utf-8',(err,data)=>{
          if(err){
            reject(err);
          }
          const rows=data.split('\n').filter(row=>!!row);

          rows.shift();
          let filteredData=[];
          const dataForTable=rows.map(row=>row.split(','));

        dataForTable.map((item)=>{
              let winner = item[10]!='' ? item[10].match(/\b(\w)/g).join('') : '-';
            let year=(item[3].split('-'));
            if(year[0]==UserInput){
              return filteredData.push([item[0],item[1],item[2],item[3],item[4],item[5],item[6],item[7],item[8],item[9],item[10],item[11],item[12],item[13],item[14],item[15],item[16],item[17]]);
              
            }
          })
          // console.log(filteredData);
          resolve(filteredData);
      })
    })
  }
};
