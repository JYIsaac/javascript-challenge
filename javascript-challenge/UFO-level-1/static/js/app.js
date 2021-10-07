// from data.js
var tableData = data;



//Sample of data from data.js
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."

// YOUR CODE HERE!

// Select table body using d3 select
var tbody = d3.select("tbody");

//anonymous function to get values

tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);

    //Append one table row 'tr' for each UFO sighting
    var row = tbody.append("tr");

    //Use Object.entries to get the key and value for each UFO sighting
    Object.entries(ufoSightings).forEach(function([key,value]) {
        console.log(key,value);
        
        //Append data cell to each row 
        var cell = row.append("td");
        cell.text(value);
    });
});

//Use D3 to Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    //Clear
    tbody.html ("");

    //Use D3 select to get input date
    var inputElement = d3.select('#datetime');
    //Get the value property of input date, state, shape
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Filter data to user's input
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selection) {
        console.log(selection);
        //Append one table row 'tr' for each UFO sighting
        var row = tbody.append("tr");
        //Use Object.entries to get the key and value of each sighting 
        Object.entries(selection).forEach(function([key,value]) {
            console.log(key,value);
            //Append data cell to each row
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
