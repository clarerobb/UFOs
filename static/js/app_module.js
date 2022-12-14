// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// build the table for data.js info 
function buildTable(data){
    // empty table
    tbody.html("");
    // loop through each object in data.js and append row and cell
    data.forEach((dataRow) => {
        // appending row to the table body
        let row = tbody.append('tr');
        // add value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}

// Add filters
function handleClick(){
    // get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check for dates with if statement
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild table with filtered data
    buildTable(filteredData);
}

// attach an event to listen for the form button
d3.selectAll('#filter-btn').on('click', handleClick);

// build table when page loads
buildTable(tableData);


