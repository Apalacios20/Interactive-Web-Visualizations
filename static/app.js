const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});


// Sample Data
let s_data = d3.json(url).then(function(data) {
    console.log("Samples :", data.samples);
});


//let values = []
//let otu_id = []
//let otu_label = []

//for (let i = 0; i < sample.length; i++) {
//    row = sample[i];
//    values.push(row.sample_values) {
//        console.log("values:", values)
//    };
//    otu_id.push(row.otu_ids);
//    otu_label.push(row.otu_label);
//    console.log("Values:", values);

//console.log("Values:", values);
// Values


// OTU Ids


// OTU Labels


