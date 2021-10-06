// from data.js
var tableData = data;

// YOUR CODE HERE!

//Sample of data from data.js
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."

// Select table body using d3 select
var tbody = d3.select("tbody");

// Function to input information into table
function inputTable() {
    tableData.map(data => {

        // Make new row
        var row = tbody.append("tr");
    
        // Append each row with data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

// Call on table function
inputTable();

// EVENT LISTENER: filter table by date input
//Select button id using d3 select
var button1 = d3.select("#filter-btn");

button1.on("click", function() {

    // Create variable for datetime input from user
    var inputValue = d3.select("#datetime").property("value");

    console.log(inputValue);
    
    // Filter table based on user input
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    // Clear original table
    tbody.html("");

    //  re-enter data with forEach loop
    filteredData.forEach(object => {
        
        // Make new row
        var row = tbody.append("tr");

        // Append each row with data
        row.append("td").text(object.datetime);
        row.append("td").text(object.city);
        row.append("td").text(object.state);
        row.append("td").text(object.country);
        row.append("td").text(object.shape);
        row.append("td").text(object.durationMinutes);
        row.append("td").text(object.comments);
    });
});

// Event listener: clear filtered results, restore original table
var button2 = d3.select("#unfilter-btn");

button2.on("click", function(){
    tbody.html("");
    inputTable();
});