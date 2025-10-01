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
      backgroundColor: "rgba(37, 99, 235, 0.08)",
      color: "var(--oc-primary)",
      borderColor: "rgba(37,99,235,0.18)",
    },
    secondary: {
      backgroundColor: "rgba(245, 158, 11, 0.12)",
      color: "#8a5a00",
      borderColor: "rgba(245, 158, 11, 0.25)",
    },
  };
  const style = variants[color] ?? variants.default;

  return (
    <Chip
      label={label}
      sx={{
        borderRadius: "var(--oc-radius-pill)",
        border: "1px solid",
        fontWeight: 600,
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
