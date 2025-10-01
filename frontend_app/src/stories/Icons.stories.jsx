import React from "react";
import * as Icons from "../ui/icons";

export default {
  title: "Foundation/Icons",
};

export const Catalog = {
  render: () => {
    const entries = Object.entries(Icons);
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
        {entries.map(([name, Icon]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, padding: 8, border: "1px solid var(--oc-border)", borderRadius: 8 }}>
            <Icon />
            <span style={{ fontSize: 12 }}>{name}</span>
          </div>
        ))}
      </div>
    );
  },
};
