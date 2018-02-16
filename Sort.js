module.exports = {
  sortedYear(filteredData){
    return new Promise((resolve, reject)=>{
      let sortedYearData = filteredData.sort(function(a, b){
        return b[0] - a[0];
      });
      resolve(sortedYearData);
    });
  },
  sortedDate(filteredData){
    return new Promise((resolve, reject)=>{
      setTimeout(function(){
        let sortedDateData = filteredData.sort(function(a, b){
           return new Date(b[0]) - new Date(a[0]);
        });
        resolve(sortedDateData);
      });
    });
  },
};
