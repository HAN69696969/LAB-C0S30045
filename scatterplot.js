
var w = 600;
var h = 400;
var padding = 50;


var dataset = [
    [10, 100], [80, 200], [200, 50], [50, 22], [110, 55], 
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [500, 90]
];


var xScale = d3.scaleLinear()
               .domain([0, d3.max(dataset, function(d) { return d[0]; })])
               .range([padding, w - padding * 2]);

var yScale = d3.scaleLinear()
               .domain([0, d3.max(dataset, function(d) { return d[1]; })])
               .range([h - padding, padding]);


var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);


var svg = d3.select("#plot")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) { return xScale(d[0]); })
   .attr("cy", function(d) { return yScale(d[1]); })
   .attr("r", function(d) { return Math.sqrt(d[1]); })
   .attr("fill", function(d) { return d[0] === 500 ? "red" : "black"; });


svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) { return d[0] + "," + d[1]; })
   .attr("x", function(d) { return xScale(d[0]) + 5; })
   .attr("y", function(d) { return yScale(d[1]) - 5; })
   .attr("font-size", "12px")
   .attr("fill", "green");


svg.append("g")
   .attr("transform", "translate(0," + (h - padding) + ")")
   .call(xAxis);


svg.append("g")
   .attr("transform", "translate(" + padding + ",0)")
   .call(yAxis);