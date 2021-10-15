import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { toCapitalize } from "../../utils/util";

am4core.useTheme(am4themes_animated);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    height: "100%",
  },
  root: {
    height: "100%",
  },
}));

const OAColumnLineChart = ({
  data,
  title,
  xUnit,
  yColumUnit,
  yLineUnit,
  columnLimit,
  lineLimit,
}) => {
  const classes = useStyles();
  const titleText = title;
  let hiddenColumn = false;
  let hiddenLine = false;

  useEffect(() => {
    let chart = am4core.create(titleText, am4charts.XYChart);
    chart.data = data;
    let title = chart.titles.create();
    title.text = titleText;
    title.fill = am4core.color("#636e72");
    title.fontSize = 18;
    title.height = 24;
    title.align = "left";

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.contentAlign = "right";
    chart.legend.fontSize = 12;
    chart.legend.labels.template.fill = am4core.color("#636e72");
    chart.legend.height = 16;
    chart.legend.marginBottom = 50;

    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 20;
    markerTemplate.height = 20;
    markerTemplate.strokeWidth = 0;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey(xUnit, "MMM YYYY");
    dateAxis.dataFields.category = xUnit;
    dateAxis.fontSize = 14;
    dateAxis.renderer.labels.template.fill = am4core.color("#636e72");
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.renderer.grid.template.strokeWidth = 0;
    dateAxis.cursorTooltipEnabled = false;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.fontSize = 14;
    valueAxis.renderer.labels.template.fill = am4core.color("#636e72");
    valueAxis.renderer.grid.template.stroke = "#f5f5f5";
    valueAxis.renderer.grid.template.strokeWidth = 2;
    valueAxis.renderer.grid.template.strokeOpacity = 0.8;
    valueAxis.renderer.baseGrid.stroke = "#f5f5f5";
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.numberFormatter = new am4core.NumberFormatter();
    valueAxis.numberFormatter.numberFormat = "$#,###.#.a";
    valueAxis.cursorTooltipEnabled = false;

    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = toCapitalize(yColumUnit);
    columnSeries.dataFields.valueY = yColumUnit;
    columnSeries.dataFields.dateX = xUnit;
    columnSeries.yAxis = valueAxis;
    columnSeries.fill = am4core.color("#b0b6b8");
    columnSeries.fillOpacity = ".6";
    columnSeries.stroke = 0;
    columnSeries.columns.template.column.cornerRadiusTopLeft = 6;
    columnSeries.columns.template.column.cornerRadiusTopRight = 6;
    columnSeries.columns.template.propertyFields.fill =
      am4core.color("#BDC3C7");
    columnSeries.tooltipText =
      "[#fff font-size: 14px]{name} \n[/] [#fff font-size: 12px]{dateX.formatDate('MMM yyyy')} \n[/]  [#fff font-size: 18px]{valueY.formatNumber('$#,###.#.a')}[/] [#fff]{additional}[/]";
    columnSeries.events.on("hidden", function () {
      if (lineLimit) {
        if (!hiddenLine) {
          valueAxis.max = lineLimit > 0 ? lineLimit : 0;
        }
        hiddenColumn = true;
      }
    });
    columnSeries.events.on("shown", function () {
      if (columnLimit && lineLimit) {
        if (hiddenLine) {
          valueAxis.max = columnLimit;
        } else {
          valueAxis.max =
            Math.max(columnLimit, lineLimit) > 0
              ? Math.max(columnLimit, lineLimit)
              : 0;
        }
        hiddenColumn = false;
      }
    });

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = toCapitalize(yLineUnit);
    lineSeries.dataFields.valueY = yLineUnit;
    lineSeries.dataFields.dateX = xUnit;
    lineSeries.yAxis = valueAxis;
    lineSeries.stroke = am4core.color("#10ac84");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.smoothing = "monotoneX";
    lineSeries.tooltipText =
      "[#fff font-size: 14px]{name} \n[/] [#fff font-size: 12px]{dateX.formatDate('MMM yyyy')} \n[/]  [#fff font-size: 18px]{valueY.formatNumber('$#,###.#.a')}[/] [#fff]{additional}[/]";
    lineSeries.events.on("hidden", function () {
      if (columnLimit) {
        if (!hiddenColumn) {
          valueAxis.max = columnLimit > 0 ? columnLimit : 0;
        }
        hiddenLine = true;
      }
    });
    lineSeries.events.on("shown", function () {
      if (columnLimit && lineLimit) {
        if (hiddenColumn) {
          valueAxis.max = lineLimit;
        } else {
          valueAxis.max =
            Math.max(columnLimit, lineLimit) > 0
              ? Math.max(columnLimit, lineLimit)
              : 0;
        }
        hiddenLine = false;
      }
    });
    const bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#10ac84");
    const circle = bullet.createChild(am4core.Circle);
    circle.radius = 5;
    circle.fill = am4core.color("#10ac84");
    circle.strokeWidth = 2.5;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineY.strokeWidth = 0;

    chart.zoomOutButton.background.fill = am4core.color("#636e72");
    chart.zoomOutButton.background.states.getKey("hover").properties.fill =
      am4core.color("#10ac84");
    chart.zoomOutButton.background.states.getKey("down").properties.fill =
      am4core.color("#10ac84");

    lineSeries.tooltip.getFillFromObject = false;
    lineSeries.tooltip.background.fill = am4core.color("#10ac84");

    columnSeries.tooltip.getFillFromObject = false;
    columnSeries.tooltip.background.fill = am4core.color("#b0b6b8");

    chart.logo.disabled = true;

    return function cleanup() {
      chart.dispose();
    };
  }, [hiddenColumn, hiddenLine]);

  return <div id={titleText} className={classes.root}></div>;
};

export default OAColumnLineChart;
