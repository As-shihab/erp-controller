import React, { useEffect, useState } from "react";
import GlobalTable from "../../../Shared/Components/GlobalTable/GlobalTable";
import Type from "./Components/Type";

export default function LocationTyps() {
  const [isNew, setNew] = useState(false);
  const [status, setStatus] = useState("");
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Friend Name",
      accessor: "friend.name",
    },
  ];

  const data: any[] = [
    {
      name: "John",
      age: 29,
      status: "single",
      friend: { name: "Jake", age: 28 },
    },
  ];

  useEffect(() => {
    if (isNew) {
      setStatus("new");
    } else {
      setStatus("edit");
    }
  }, [isNew]);

  return (
    <div>
      <Type open={{ isOpen: isNew, setOpen: setNew }} status={status} />

      <GlobalTable
        columns={columns}
        data={data}
        NewButtonText="New"
        newButtonToggle={{ isNew: isNew, setNew: setNew }}
      />
    </div>
  );
}
