import { Button, Icon } from "@ui5/webcomponents-react";
import GlobalTable from "../../../../Shared/Components/GlobalTable/GlobalTable";
import { useState } from "react";
export default function UserList() {
  const [isNew, setNew] = useState(false);

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
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Created At",
      accessor: "updated_at",
    },
    {
      Header: "Updated At",
      accessor: "created_at",
    },

  ];

  return (
    <div>
      <GlobalTable
        columns={columns}
        NewButtonText="New"
        actionButton={true}
        newButtonToggle={{ isNew: isNew, setNew: setNew }}
        network={{
          endpoint: "Users",
          isOdata: true,
        }}
      />
    </div>
  );
}
