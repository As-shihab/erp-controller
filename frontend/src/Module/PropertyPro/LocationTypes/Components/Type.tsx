import {
  Dialog,
  FlexBox,
  Button,
  List,
  ListItemStandard,
} from "@ui5/webcomponents-react";
import React from "react";

export default function Type({ open , status }: any) {
  const { isOpen, setOpen } = open;
  return (
    <Dialog
      footer={
        <FlexBox
          fitContainer
          justifyContent="End"
          style={{ paddingBlock: "0.25rem" }}
        >
          <Button
            design="Emphasized"
            
          >
            Save
          </Button>

          <Button
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            Close
          </Button>
        </FlexBox>
      }
      headerText={status? status: null}
      open={isOpen}
    >
      <List>
        <ListItemStandard additionalText="Fruits">Apples</ListItemStandard>
        <ListItemStandard additionalText="Fruits">Bananas</ListItemStandard>
        <ListItemStandard additionalText="Vegetables">Potato</ListItemStandard>
      </List>
    </Dialog>
  );
}
