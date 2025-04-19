import {
  AnalyticalTable,
  Bar,
  Button,
  Input,
  Title,
} from "@ui5/webcomponents-react";
import { Http } from "../../../Http/Http"; // Replace with your actual path
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

// Replace with your actual path

export default function GlobalTable(props: any) {
  const { refreshTable, setRefrashTable } = useContext(GlobalContext);
  const { columns, NewButtonText, newButtonToggle, network } = props;
  const { endpoint, isOdata, Model,  } = network;
  // StaticData
  const { isNew, setNew } = newButtonToggle;
  const http = new Http();
  const [isLoading, setLoading] = useState(false);
  const [TableData, setTableData] = useState([]);
  const [TableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    FetchData();
    setTableColumns(columns);

    if (refreshTable) {
      FetchData();
    }
  }, [refreshTable]);

  const FetchData = () => {
    console.log(columns);
    setLoading(true);
    http
      .get(endpoint, isOdata ?? false)
      .then((res: any) => {
        closeAction();
        console.log("Fetched data:", res.data);
        if (Model && res.data?.value?.length > 0) {
          const formatted = res.data.value.map((data: any) =>
            new Model().deserialize(data)
          );
          setTableData(formatted);
        } else {
          setTableData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  };

  const closeAction = () => {
    setRefrashTable(false);
    setLoading(false);
  };

  return (
    <div style={{ padding: "5px"} }>
      <Bar
        design="Header"
        startContent={
          <span>
            <b>Total</b> ({TableData.length})
          </span>
        }
        endContent={
          <div className="flex gap-2">
            <Input placeholder="Type to filter data" readonly={isLoading} />
            {NewButtonText ? (
              <Button
                disabled={isLoading}
                onClick={() => setNew(!isNew)}
                className="border-2 border-slate-300"
                design="Default"
                icon={NewButtonText === "New" ? "add" : ""}
              >
                {NewButtonText}
              </Button>
            ) : null}
          </div>
        }
      >
        <Title>Location Types</Title>
      </Bar>

      <AnalyticalTable
        style={{
          height:'100vh',
          minWidth: "100%",
          backgroundColor: "white",
        }}
        className="h-sreen"
        headerRowHeight={40}
        rowHeight={40}
        columns={TableColumns}
        data={TableData}
        loading={isLoading}
        minRows={40}
        // additionalEmptyRowsCount={
        // TableData.length < 20 ? 20 - TableData.length : 0
        // }
      />

      {/* For debugging */}
      {/* <pre>{JSON.stringify(TableData, null, 2)}</pre> */}
    </div>
  );
}
