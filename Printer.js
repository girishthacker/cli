let Table = require('cli-table');
module.exports = {
  PrintData(sortedData, header){

    const table = new Table({
      head: header,
    });
    sortedData.forEach(function(element){
      table.push(element);
    });
    console.log(table.toString());
  }
}











