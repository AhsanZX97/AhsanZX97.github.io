$(document).ready(function () {
   $('.tabs').tabs();
});
// start carrousel
$('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators: false
});


$('.tab').click(function (e) {
   e.preventDefault();
   var id = $(this).attr('id');
   var num = parseInt(id[id.length-1]) - 1;
   console.log(num);
   $('.carousel').carousel('set', num);
});


google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
   var data = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["Java", 85, "#b87333"],
      ["JavaScript", 80, "silver"],
      ["Python", 75, "gold"],
      ["Ruby", 75, "color: #e5e4e2"],
      ["PHP", 70, "color: #e5e4e2"],
      ["C#", 50, "color: #e5e4e2"]
   ]);

   var view = new google.visualization.DataView(data);
   view.setColumns([0, 1,
      {
         calc: "stringify",
         sourceColumn: 1,
         type: "string",
         role: "annotation"
      },
      2]);

   var options = {
      title: "Languages",
      width: 1100,
      height: 300,
      bar: { groupWidth: "95%" },
      legend: { position: "none" },
   };

   var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
   chart.draw(view, options);

   var data2 = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["SQL", 85, "#b87333"],
      ["Firebase", 80, "silver"],
      ["MongoDB", 60, "gold"],
      ["AWS", 55, "color: #e5e4e2"],
   ]);

   var view2 = new google.visualization.DataView(data2);
   view2.setColumns([0, 1,
      {
         calc: "stringify",
         sourceColumn: 1,
         type: "string",
         role: "annotation"
      },
      2]);

   var options2 = {
      title: "Database",
      width: 1100,
      height: 300,
      bar: { groupWidth: "95%" },
      legend: { position: "none" },
   };

   var chart2 = new google.visualization.BarChart(document.getElementById("barchart_values2"));
   chart2.draw(view2, options2);

   var data3 = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["HTML & CSS", 85, "#b87333"],
      ["Git", 80, "silver"],
      ["MVC", 80, "gold"],
      ["Web API", 75, "color: #e5e4e2"],
   ]);

   var view3 = new google.visualization.DataView(data3);
   view3.setColumns([0, 1,
      {
         calc: "stringify",
         sourceColumn: 1,
         type: "string",
         role: "annotation"
      },
      2]);

   var options3 = {
      title: "Others",
      width: 1100,
      height: 300,
      bar: { groupWidth: "95%" },
      legend: { position: "none" },
   };

   var chart3 = new google.visualization.BarChart(document.getElementById("barchart_values3"));
   chart3.draw(view3, options3);
}

$(".single-item").slick({
   dots: true
});

