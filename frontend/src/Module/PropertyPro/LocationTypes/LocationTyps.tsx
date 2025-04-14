import { useEffect, useState } from "react";
import GlobalTable from "../../../Shared/Components/GlobalTable/GlobalTable";
import Type from "./Components/Type";
import { LocationType } from "../../../Shared/Model/LocationType";

export default function LocationTyps() {
  const [isNew, setNew] = useState(false);
  const [status, setStatus] = useState("");
  const columns = [
    {
      Header: "Name",
      accessor: "active",
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
      setStatus("post");
    } else {
      setStatus("put");
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
        network={{
          Model: LocationType,
          endpoint: "LocationTypes",
          isOdata: true,
        }}
      />
    </div>
  );
}
