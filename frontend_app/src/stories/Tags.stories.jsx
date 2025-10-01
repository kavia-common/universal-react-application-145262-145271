import React from "react";
import { Tag, TagGroup } from "../ui/Tags";

export default {
  title: "Foundation/Tags",
  component: Tag,
};

export const Variants = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <Tag label="Default" />
      <Tag label="Primary" color="primary" />
      <Tag label="Secondary" color="secondary" />
    </div>
  ),
};

export const Group = {
  render: () => (
    <TagGroup items={["Adventure", "Concerts", "Technology"]} />
  ),
};
