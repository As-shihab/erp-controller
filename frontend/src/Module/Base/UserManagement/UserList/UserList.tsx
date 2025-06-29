import { Button, Icon } from "@ui5/webcomponents-react";
import GlobalTable from "../../../../Shared/Components/GlobalTable/GlobalTable";
import { useState } from "react";
export default function UserList() {
  const [isNew, setNew] = useState(false);

  const columns = [
    {
      Header: "Active",
      accessor: "is_active",
      width: 80,
      hAlign: "Center",
      Cell: ({ value }: any) =>
        value ? <Icon name="accept" /> : <Icon name="decline" />,
    },
    { Header: "Custom Id", accessor: "custom_id" },

    {
      Header: "Name",
      accessor: "name",
    },

    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Email Verified",
      accessor: "email_verified",
      hAlign: "Center",
      Cell: ({ value }: any) =>
        value ? <Icon className="text-green-400" name="accept" /> : <Icon className="text-red-500" name="decline" />,
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
