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
