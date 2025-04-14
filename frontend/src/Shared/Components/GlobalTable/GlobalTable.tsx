import {
  AnalyticalTable,
  Bar,
  Button,
  Input,
  Title,
} from "@ui5/webcomponents-react";
import { Http } from "../../../Http/Http";
import { useEffect, useState } from "react";

export default function GlobalTable(props: any | undefined) {
  const { columns, data, NewButtonText, newButtonToggle, network } = props;
  const { endpoint, isOdata, Model, StaticData } = network;
  const { isNew, setNew } = newButtonToggle;
  const http = new Http();
  let TableData: any[] = [];
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (!StaticData) {
      FetchData();
    }
    if (StaticData) {
      TableData = Object.assign(StaticData);
    }
  }, [StaticData]);

  const FetchData = () => {
    setLoading(true);
    http
      .get(endpoint, isOdata ? true : false)
      .then((res: any) => {
        if (Model) {
          let data = new Model();
          Object.values(res.data.value).map((items: any) => {
            console.log(items);
          });
          console.log(data);
          CloseAction();
        }
      })
      .catch((err) => console.log(err));
  };

  const CloseAction = () => {
    setLoading(false);
  };

  return (
    <div style={{ padding: "5px 5px", background: "#fff" }}>
      <Bar
        design="Header"
        startContent={
          <span>
            <b>Total</b>(12)
          </span>
        }
        endContent={
          <>
            <div className="flex gap-2">
              <Input placeholder="Search" />
              {NewButtonText ? (
                <Button
                  onClick={() => {
                    setNew(!isNew);
                  }}
                  className="border-2 border-slate-300"
                  design="Default"
                  icon={NewButtonText == "New" ? "add" : ""}
                >
                  New
                </Button>
              ) : null}
            </div>
          </>
        }
      >
        <Title>Location Types</Title>
      </Bar>

      <AnalyticalTable
        columns={columns}
        data={TableData || []}
        minRows={20}
        loading={isLoading}
        additionalEmptyRowsCount={50}
      />
    </div>
  );
}
