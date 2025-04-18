import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const RealTimeChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = am5.Root.new(chartRef.current!);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineX.set("forceHidden", true);
    cursor.lineY.set("forceHidden", true);

    let date = new Date();
    date.setHours(0, 0, 0, 0);

    let value = 20;
    function generateData() {
      value = am5.math.round(Math.random() * 10 - 4.8 + value, 1);
      if (value < 0) value = Math.random() * 10;
      if (value > 100) value = 100 - Math.random() * 10;

      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value,
      };
    }

    function generateDatas(count: number) {
      const data = [];
      for (let i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 90,
        }),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
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

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true,
    });

    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
      })
    );

    // Draggable Range
    const rangeDataItem = yAxis.makeDataItem({});
    yAxis.createAxisRange(rangeDataItem);

    const container = am5.Container.new(root, {
      centerY: am5.p50,
      draggable: true,
      layout: root.horizontalLayout,
    });

    container.adapters.add("x", () => 0);
    container.adapters.add("y", (y) =>
      Math.max(0, Math.min(chart.plotContainer.height(), Number(y)))
    );

    container.events.on("dragged", () => {
      updateLabel();
    });

    yAxis.topGridContainer.children.push(container);

    rangeDataItem.set(
      "bullet",
      am5xy.AxisBullet.new(root, {
        sprite: container,
      })
    );

    const grid = rangeDataItem.get("grid");
    if (grid) {
      grid.setAll({
        strokeOpacity: 1,
        visible: true,
        stroke: am5.color(0x000000),
        strokeDasharray: [2, 2],
      });
    }

    const background = am5.RoundedRectangle.new(root, {
      fill: am5.color(0xffffff),
      fillOpacity: 1,
      strokeOpacity: 0.5,
      cornerRadiusTL: 0,
      cornerRadiusBL: 0,
      cursorOverStyle: "ns-resize",
      stroke: am5.color(0xff0000),
    });

    container.set("background", background);

    const label = container.children.push(
      am5.Label.new(root, {
        paddingTop: 5,
        paddingBottom: 5,
      })
    );

    const xButton = container.children.push(
      am5.Button.new(root, {
        cursorOverStyle: "pointer",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 8,
      })
    );

    xButton.set(
      "label",
      am5.Label.new(root, {
        text: "X",
        paddingBottom: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0,
        fill: am5.color(0xff0000),
      })
    );

    const bg = xButton.get("background");
    if (bg) {
      bg.setAll({
        strokeOpacity: 0,
        fillOpacity: 0,
      });
    }

    xButton.events.on("click", () => {
      yAxis.disposeDataItem(rangeDataItem);
    });

    function updateLabel(value?: number) {
      const y = container.y();
      const position = yAxis.toAxisPosition(y / chart.plotContainer.height());

      if (value == null) {
        value = yAxis.positionToValue(position);
      }

      label.set(
        "text",
        root.numberFormatter.format(value, "#.00") + ">Stop loss"
      );

      rangeDataItem.set("value", value);
    }

    series.events.on("datavalidated", () => {
      const max = yAxis.getPrivate("max", 1);
      const min = yAxis.getPrivate("min", 0);

      const value = min + (max - min) / 2;
      rangeDataItem.set("value", value);
      updateLabel(value);
    });

    series.data.setAll(generateDatas(300));
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

export default RealTimeChart;
