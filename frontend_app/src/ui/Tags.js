import React from "react";
import PropTypes from "prop-types";
import { Chip, Stack } from "@mui/material";

// PUBLIC_INTERFACE
export function Tag({ label, color = "default", sx = {}, ...props }) {
  /** A chip/tag with Ocean variants: 'default' | 'secondary' (amber) | 'primary' */
  const variants = {
    default: {
      backgroundColor: "rgba(0,0,0,0.04)",
      color: "var(--oc-text)",
      borderColor: "var(--oc-border)",
    },
    primary: {
      backgroundColor: "var(--oc-primary-soft-bg)",
      color: "var(--oc-primary)",
      borderColor: "var(--oc-primary-soft-border)",
    },
    secondary: {
      backgroundColor: "var(--oc-amber-soft-bg)",
      color: "#8a5a00",
      borderColor: "var(--oc-amber-soft-border)",
    },
  };
  const style = variants[color] ?? variants.default;

  return (
    <Chip
      label={label}
      sx={{
        borderRadius: "var(--oc-radius-pill)",
        border: "1px solid",
        fontWeight: "var(--oc-font-600)",
        ...style,
        ...sx,
      }}
      {...props}
    />
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  sx: PropTypes.object,
};

// PUBLIC_INTERFACE
export function TagGroup({ items = [], spacing = 1, ...props }) {
  /** Horizontal tag group helper. */
  return (
    <Stack direction="row" spacing={spacing} flexWrap="wrap" {...props}>
      {items.map((t, i) => (
        <Tag key={i} {...(typeof t === "string" ? { label: t } : t)} />
      ))}
    </Stack>
  );
}

TagGroup.propTypes = {
  items: PropTypes.array,
  spacing: PropTypes.number,
};
