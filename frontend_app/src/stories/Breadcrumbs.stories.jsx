import React from "react";
import Breadcrumbs from "../ui/Breadcrumbs";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
};

export const Basic = {
  render: () => (
    <Breadcrumbs
      items={[
        { label: "Home", href: "#" },
        { label: "Events", href: "#" },
        { label: "Search Results" },
      ]}
      onNavigate={(it) => console.log("nav->", it)}
    />
  ),
};
