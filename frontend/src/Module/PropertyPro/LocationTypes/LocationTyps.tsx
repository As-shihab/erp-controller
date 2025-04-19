import { useEffect, useState } from "react";
import GlobalTable from "../../../Shared/Components/GlobalTable/GlobalTable";
import Type from "./Components/Type";
import { LocationType } from "../../../Shared/Model/LocationType";
import { Button, Icon } from "@ui5/webcomponents-react";
import {  useDeleteEntity } from "../../../Shared/Components/Entity/DeleteEntity";

export default function LocationTyps() {
  const deleteEntity = useDeleteEntity();
  const [isNew, setNew] = useState(false);
  const [status, setStatus] = useState("");
  let locationtype: any = new LocationType().deserialize({});
  const columns = [
    {
      Header: "Active",
      accessor: "active",
      width: 80,
      hAlign: "Center",
      Cell: ({ value }: any) =>
        value ? <Icon name="accept" /> : <Icon name="decline" />,
    },
    {
      Header: "Custom Id",
      accessor: "custom_id",
    },
    {
      Header: "Age",
      accessor: "name",
    },
    {
      Header: "sdfg",
      accessor: "created_at",
    },
    {
      Header: "Friend Name",
      accessor: "updated_at",
    },
    {
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
      hAlign: "Center" ,
      Cell: ({ row }: any) => (
        <div>
          <Button icon="edit" design="Transparent" onClick={() => {
          
          }}></Button>
          <Button
            icon="delete"
            design="Transparent"
            onClick={() => {deleteEntity('LocationTypes', locationtype.deserialize(row.original))}}
            disabled={ locationtype.id === row.original.id}
          ></Button>
        </div>
      ),
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
