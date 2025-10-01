import React, { useState } from "react";
import ModalDialog from "../ui/ModalDialog";
import { OutlineButton, PrimaryButton } from "../ui/Buttons";

export default {
  title: "Feedback/ModalDialog",
  component: ModalDialog,
};

export const Basic = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <OutlineButton onClick={() => setOpen(true)}>Open Modal</OutlineButton>
        <ModalDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Subscribe to updates"
          actions={
            <>
              <OutlineButton onClick={() => setOpen(false)}>Cancel</OutlineButton>
              <PrimaryButton onClick={() => setOpen(false)}>Confirm</PrimaryButton>
            </>
          }
        >
          You will receive notifications about new events in your area.
        </ModalDialog>
      </>
    );
  },
};
