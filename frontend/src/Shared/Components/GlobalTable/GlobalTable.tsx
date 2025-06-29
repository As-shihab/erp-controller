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
import { useDeleteEntity } from "../Entity/DeleteEntity";

// Replace with your actual path

export default function GlobalTable(props: any) {
  const { refreshTable, setRefrashTable } = useContext(GlobalContext);
  const { columns, NewButtonText, newButtonToggle, network, actionButton } =
    props;
  const { endpoint, isOdata, Model } = network;
  // StaticData
  const { isNew, setNew } = newButtonToggle;
  const http = new Http();
  const [isLoading, setLoading] = useState(false);
  const [TableData, setTableData] = useState([]);
  const [TableColumns, setTableColumns] = useState<any[]>([]);
  const deleteEntity = useDeleteEntity();
  const onDelete = (row: any) => {
    deleteEntity(
      endpoint,
      row.original.id,
      isOdata,
      Model ? Model.deserialize(row.original) : undefined
    );
  };

  useEffect(() => {
    FetchData();

    if (actionButton) {
      const actionColumn = {
        Header: "Action",
        accessor: "action",
        cellLabel: () => "",
        disableFilters: true,
        disableGroupBy: true,
        disableSortBy: true,
        autoResizable: true,
        id: "actions",
        width: 100,
        className: "custom-class-name",
        hAlign: "Center",
        Cell: ({ row }: any) => (
          <div>
            <Button
              icon="edit"
              design="Transparent"
              onClick={() => {}}
            ></Button>
            <Button
              icon="delete"
              design="Transparent"
              onClick={() => onDelete(row as any)}
            ></Button>
          </div>
        ),
      };
      setTableColumns([...columns, actionColumn]);
    } else {
      setTableColumns(columns);
    }

    if (refreshTable) {
      FetchData();
    }
  }, [refreshTable]);



  // fetch data from api
  const FetchData = () => {
    console.log(columns);
    setLoading(true);
    http
      .get(endpoint, isOdata ?? false)
      .then((res: any) => {
        closeAction();
        if (Model && res.data?.value?.length > 0) {
          const formatted = res.data.value.map((data: any) =>
            new Model().deserialize(data)
          );
          setTableData(formatted);
        } else {
          setTableData(res.data.value || []);
        }
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  // end fetch data
  const closeAction = () => {
    setRefrashTable(false);
    setLoading(false);
  };

  return (
    <div style={{ padding: "5px" }}>
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
          height: "100%",
          minWidth: "100%",
          backgroundColor: "white",
        }}
        headerRowHeight={40}
        rowHeight={40}
        columns={TableColumns}
        data={TableData}
        loading={isLoading}
        minRows={20}
      />

      {/* For debugging */}
      {/* <pre>{JSON.stringify(TableData, null, 2)}</pre> */}
    </div>
  );
}
