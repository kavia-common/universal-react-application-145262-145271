import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

// PUBLIC_INTERFACE
export default function Dropdown({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  startAdornment = null,
  sx = {},
  ...props
}) {
  /** A labeled Select component with optional leading adornment (icon). */
  const normalized = options.map((o) =>
    typeof o === "string" ? { label: o, value: o } : o
  );

  return (
    <FormControl fullWidth sx={{ minWidth: 180, ...sx }}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        label={label}
        value={value ?? ""}
        onChange={onChange}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) return placeholder ?? "Select...";
          const found = normalized.find((n) => n.value === selected);
          return (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {startAdornment}
              <span>{found?.label ?? selected}</span>
            </Box>
          );
        }}
        {...props}
      >
        {placeholder && (
          <MenuItem disabled value="">
            {placeholder}
          </MenuItem>
        )}
        {normalized.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.any }),
    ])
  ),
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  sx: PropTypes.object,
};
