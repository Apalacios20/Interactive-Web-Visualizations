const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const path = "samples.json"

function init() {

      var dropdown = d3.select("#selDataset");

      d3.json(url).then(function (data) {
      let meta = data.metadata;
      var data_names = data.names;
      let samples = data.samples;


      console.log("Meta:",meta);
      console.log("Names:",data_names);
      console.log("Samples:",samples);

      data_names.forEach((sample) => {
        dropdown
          .append("option")
          .text(sample)
          .property("value", sample);
      });
    })};

init();