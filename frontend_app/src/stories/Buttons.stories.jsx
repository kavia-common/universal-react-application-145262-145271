import React from "react";
import { PrimaryButton, OutlineButton } from "../ui/Buttons";

export default {
  title: "Foundation/Buttons",
  component: PrimaryButton,
};

export const Primary = {
  render: () => <PrimaryButton>Primary Action</PrimaryButton>,
};

export const Outline = {
  render: () => <OutlineButton>Outline Action</OutlineButton>,
};

export const Disabled = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <PrimaryButton disabled>Primary Disabled</PrimaryButton>
      <OutlineButton disabled>Outline Disabled</OutlineButton>
    </div>
  ),
};
