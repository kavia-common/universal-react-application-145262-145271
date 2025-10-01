import React from "react";
import Spinner from "../ui/Spinner";

export default {
  title: "Feedback/Spinner",
  component: Spinner,
};

export const Basic = {
  render: () => <Spinner label="Loading events..." />,
};
