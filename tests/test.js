const parser = require('../Parser.js');
const sort = require('../Sort.js');
//TestCase For Question1 That Checks For Length Of Array
test('Function should return promise and promise should contains array of length 636', function() {
  const yearArrayOfRows = parser.parsedYear();
  return yearArrayOfRows.then((filteredData) => {
    expect(filteredData).toHaveLength(636);
    expect(Array.isArray(['filteredData'])).toBe(true);
  });
});
var data = [[2010], [2008], [2009]];
var sortedData = [[2010], [2009], [2008]];
//TestCase For Question1 That Checks Whether Data Is In Sorted Year Or Not
test('Function should return data by sorted year', function(){
  sort.sortedYear(data).then((sortedYearData)=>{
    expect(sortedYearData).toEqual(sortedData);
  }).catch((err)=>{
    console.log(err);
  });
});
//TestCase For Question2 That Checks Whether Data Is Of Particular Year Or Not
test('function should return promise and promise contains data of particular year', function(){
  const dateArray = parser.parsedDate(2017);
  let year = [];
  return dateArray.then((filteredData)=>{
    filteredData.map((item)=>{
      year = (item[0].split('-'));
      expect(year[0]).toContain(2017);
    });
  });
});
//TestCase For Question2 That Checks Whether Data Is In Sorted Order Of Date Or Not
test('Function Should Return Data By Sorted Date', function(){
  let date = [['2017-05-19'], ['2017-05-14'], ['2017-05-21']];
  let sortedDate = [['2017-05-21'], ['2017-05-19'], ['2017-05-14']];
  sort.sortedDate(date).then((sortedData)=>{
    expect(sortedData).toEqual(sortedDate);
  });
});

