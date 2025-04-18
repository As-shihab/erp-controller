import { Card } from "@ui5/webcomponents-react";
import RealTimeChart from "../../../Shared/Components/Chart/realtimechart/RealtimeChart";
import PieChartView from "../../../Shared/Components/Chart/piechart/PieChart";
import LineChartView from "../../../Shared/Components/Chart/linechart/LineChart";
import LegendChartView from "../../../Shared/Components/Chart/legendchart/LegendChart";

export default function Overview() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="col-span-2 grid grid-rows-2 gap-1 h-full ">
          <div className="h-full w-full">
            <Card className="h-full w-full">
              <RealTimeChart />
            </Card>
          </div>
          <div className="bg-blue-600 gap-2 grid grid-cols-3">
            <Card className="h-full col-span-2 w-full">
              <LineChartView />
            </Card>
            <Card className="h-full  w-full">
              <PieChartView />
            </Card>
          </div>
        </div>
        <div className="h-full grid grid-rows-[40vh_1fr] gap-2 ">
          <div className="">
            <Card>
              <LegendChartView />
            </Card>
          </div>
          <div className="bg-red-600"></div>
        </div>
      </div>
    </div>
  );
}
