import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import { LocationOnIcon } from "../ui/icons";

export default {
  title: "Foundation/Dropdowns",
  component: Dropdown,
};

export const Basic = {
  render: () => {
    const [val, setVal] = useState("");
    return (
      <Dropdown
        label="Location"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        options={["Mumbai", "Delhi", "Bengaluru"]}
        placeholder="Select location"
        startAdornment={<LocationOnIcon sx={{ color: "var(--oc-primary)" }} />}
        sx={{ width: 280 }}
      />
    );
  },
};
