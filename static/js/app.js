// from data.js
const tableData = amc;







// get table references
var tbody = d3.select("tbody");

function buildTable(amc) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  amc.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
let elementvariable = d3.select(this);
    // 4b. Save the value that was changed as a variable.
let elementvalue = elementvariable.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
let filteridvariable = elementvariable.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
if (elementvalue) {

filters[filteridvariable] = elementvalue;

} else {

delete filters[filteridvariable];

}
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
Object.entries(filters).forEach(([key, val]) => {

filteredData = filteredData.filter(row=> row[key]=== val);

    });
  
    // 10. Finally, rebuild the table using the filtered data
     // Build the table when the page loads
  buildTable(filteredData);

  }
  
  // 2. Attach an event to listen for changes to each filter
  
  d3.selectAll("input").on("change", updateFilters);
  

  
  // Build the table when the page loads
  buildTable(tableData);


  //   lowest = 0

//   for (let i=0; i<amc.length; i+=1) {
//       if (Math.min(amc.slice()[i]["Predicted_Close"])) {
//           lowest = Math.min(amc.slice()[i]["Predicted_Close"])
//       }
      
//   };

  highest = 0
  highestdate = 0
  highestday = 0

  for (let i=0; i<amc.length; i+=1) {
      if (parseFloat(amc[i]["Predicted_Close"]) > highest) {
          highest = amc[i]["Predicted_Close"]
          highestdate = amc[i]["Future_Date"]
          highestday = amc[i]["DayofWk"]
      }

    
      
  };
 
  console.log(amc.length);
  console.log(highestdate);
  console.log(parseFloat(highest));
  console.log(highestday);

  document.getElementById("jsday-variable").innerHTML = highestday;
  document.getElementById("jsd-variable").innerHTML = highestdate;
  document.getElementById("js-variable").innerHTML = parseFloat(Math.round(highest* 100) / 100);




j=0

lowest = amc[j]["Predicted_Close"] 
lowestdate = amc[j]["Future_Date"]
lowestday = amc[j]["DayofWk"]

for (var j = 0; j<amc.length; j+=1){
   
    if (amc[j]["Predicted_Close"] < lowest) {
                  lowest = parseFloat(amc[j]["Predicted_Close"]);
                  lowestdate = amc[j]["Future_Date"]
                  lowestday = amc[j]["DayofWk"]
              }
              
          };
console.log(lowestdate);
console.log(parseFloat(lowest));
console.log(lowestday);

 document.getElementById("jwsday-variable").innerHTML = lowestday;
 document.getElementById("jwsd-variable").innerHTML = lowestdate;
  document.getElementById("jws-variable").innerHTML = parseFloat(Math.round(lowest* 100) / 100);

 