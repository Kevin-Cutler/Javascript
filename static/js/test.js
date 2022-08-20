
// from data.js
const tableData = amc;

 // Here array.values() function is called.
 var iterator = tableData.values();
 
 // Here all the elements of the array is being printed.
 for (let elements of iterator) {
//    console.log(elements["Future_Date"]);


 }  
 console.log(tableData[0]["Future_Date"]);
 console.log(tableData[59]["Future_Date"]);


var xyValues = [
  {x:tableData["Future_Date"], y:tableData["Predicted_Close"]}

];


// for (var i = 0; i < amc.length; i++){

//     console.log(amc[i]["Predicted_Close"]);
//     console.log(amc.indexOf(amc[i]["Predicted_Close"]));
// }

