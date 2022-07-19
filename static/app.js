const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Sample Data
let s_data = d3.json(url).then(function(data) {
    console.log("Samples :", data.samples);
});

// Bar chart
let values = []
let otu_id = []
let otu_label = []

d3.json(url).then(function(data) {
    s_data = data.samples;
    for (let i = 0; i < s_data.length; i++) {
        row = s_data[i];
        values.push(row.sample_values) 
        otu_id.push(row.otu_ids);
        otu_label.push(row.otu_label);
    };
});
console.log("value:", values[0]);
console.log("otu id:", otu_id);
console.log("otu label:", otu_label);

var data = [{
    type: 'bar',
    x: values[0],
    y: otu_id[0],
    orientation: 'h'
  }];
  
  Plotly.newPlot("bar", data);
