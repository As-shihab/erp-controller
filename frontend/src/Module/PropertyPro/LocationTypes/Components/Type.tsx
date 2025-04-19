import {
  Dialog,
  FlexBox,
  Button,
  Label,
  Input,
  BusyIndicator,
} from "@ui5/webcomponents-react";
import { useContext, useState } from "react";
import { Http } from "../../../../Http/Http";
import { LocationType } from "../../../../Shared/Model/LocationType";
import { Toaster } from "../../../../Shared/Components/SweetAlert/Toaster";
import { GlobalContext } from "../../../../Shared/context/GlobalContext";

export default function Type({ open, status }: any) {
  const { setRefrashTable } = useContext(GlobalContext);
  const { isOpen, setOpen } = open;
  const [isLoading, setLoading] = useState(false);
  const http = new Http();
  const data: LocationType = new LocationType().deserialize({});
  const onSave = () => {
    setLoading(true);
    console.log(data);
    if (status === "post") {
      data.custom_id = "ashdlad";
      console.log(data);
      http
        .post("LocationTypes", true, data)
        .then((res: any) => {
          console.log(res);
          Toaster("post");
          closeDialog();
          setRefrashTable(true);
        })
        .catch((err) => console.log(err));
    }

    if (status === "put") {
      http
        .update("LocationTypes", true, 1, data)
        .then((res: any) => {
          console.log(res);
          closeDialog();
        })
        .catch((err) => console.log(err));
    }
  };

  const closeDialog = () => {
    setLoading(false);
    status == "";
    data.name = "";
    setOpen(false);
  };

  return (
    <Dialog
      footer={
        <FlexBox
          fitContainer
          justifyContent="End"
          style={{ paddingBlock: "0.25rem", gap: "0.5rem" }}
        >
          <Button onClick={onSave} design="Emphasized">
            Save
          </Button>

          <Button onClick={closeDialog}>Close</Button>
        </FlexBox>
      }
      headerText={status == "post" ? "New" : "Edit"}
      open={isOpen}
    >
      <BusyIndicator delay={0} className="w-full h-full" active={isLoading}>
        <section className="w-full">
          <div className="flex flex-col">
            <Label className="mb-1" showColon={true}>
              Type name
            </Label>
            <Input
              className="w-full"
              value={data.name}
              onChange={(e) => (data.name = e.target.value)}
              placeholder="Type to name"
            />
          </div>
        </section>
      </BusyIndicator>
    </Dialog>
  );
}
