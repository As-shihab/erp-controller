import React from "react";
import {
  AnalyticalTable,
  Bar,
  Button,
  Input,
  Title,
} from "@ui5/webcomponents-react";

export default function GlobalTable(props: any | undefined) {
  const { columns, data, NewButtonText , newButtonToggle } = props;
  const {isNew , setNew } = newButtonToggle;

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
                  onClick={() => {setNew(!isNew)}}
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
        style={{ borderRadius: "12px" }}
        columns={columns}
        data={data || []}
        minRows={20}
        additionalEmptyRowsCount={50}
      />
    </div>
  );
}
