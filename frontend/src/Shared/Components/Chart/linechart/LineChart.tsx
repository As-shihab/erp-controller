import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

const LineChartView: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!);

    const myTheme = am5.Theme.new(root);

    myTheme.rule("AxisLabel", ["minor"]).setAll({ dy: 1 });
    myTheme.rule("AxisLabel").setAll({ fontSize: "0.9em" });

    root.setThemes([
      am5themes_Animated.new(root),
      myTheme,
      am5themes_Responsive.new(root),
    ]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
      })
    );

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    // Data generation
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    const generateData = () => {
      value = Math.round(Math.random() * 10 - 5 + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value,
      };
    };

    const generateDatas = (count: number) => {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push(generateData());
      }
      return data;
    };

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minorLabelsEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.set("minorDateFormats", {
      day: "dd",
      month: "MM",
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
        }),
      })
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis,
        yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });

    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors")!.getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors")!.getIndex(series.columns.indexOf(target));
    });

    // Mouse manipulation
    let isDown = false;

    chart.plotContainer.events.on("pointerdown", () => {
      isDown = true;
    });

    chart.plotContainer.events.on("globalpointerup", () => {
      isDown = false;
    });

    chart.plotContainer.events.on("globalpointermove", (e) => {
      if (isDown) {
        const tooltipDataItem = series.get("tooltipDataItem");
        if (tooltipDataItem && e.originalEvent) {
          const position = yAxis.coordinateToPosition(
            chart.plotContainer.toLocal(e.point).y
          );
          const value = yAxis.positionToValue(position);
          tooltipDataItem.set("valueY", value);
          tooltipDataItem.set("valueYWorking", value);
        }
      }
    });

    chart.plotContainer.children.push(
      am5.Label.new(root, {
        text: "Click and move mouse anywhere on plot area to change the graph",
      })
    );

    const data = generateDatas(20);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: "45vh" }}
    />
  );
};

export default LineChartView;
