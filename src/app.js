var d3 = Object.assign(
  {},
  require("d3-selection"),
  require("d3-shape"),
  require("d3-drag"),
  require("d3-array"),
  require("d3-jetpack")
);

var r = 30,
  c = d3.conventions({
    parentSel: d3.select("#graph"),
    height: innerHeight - 200,
    margin: { top:40, bottom: 40, left: 50, right: 40 }
  }),
  tt = d3.select("html").selectAppend("div.tooltip");

c.drawAxis();

c.svg.selectAll(".axis text").transition().duration(1000).st({
  // fontSize: function(d, i) {
  //   return i;
  // },
  opacity: 0.7
});

c.svg.insert("rect").at({ width: 10, height: 10 });

function drawCicle(pos) {
  c.svg
    .append("circle." + (Math.random < 0.5 ? "green" : "blue"))
    .at({ r, fillOpacity: 0.1, stroke: "#000" })
    .datum([Math.random() * c.width, Math.random() * c.height])
    .translate(pos)
    .on("mouseover", drawCicle)
    .call(d3.attachTooltip)
    .transition()
    .translate(function(d) {
      return d;
    })
    .transition()
    .duration(1000)
    .at({ r: r / 2 })
    .st({ fill: "red", strokeDasharray: "2 2" });
}


drawCicle([c.width / 2, c.height / 2]);
