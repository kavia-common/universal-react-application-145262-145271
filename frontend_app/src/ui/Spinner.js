import React from "react";
import PropTypes from "prop-types";
import { Box, CircularProgress, Typography } from "@mui/material";

// PUBLIC_INTERFACE
export default function Spinner({ size = 40, label, sx = {}, ...props }) {
  /** Circular loader with optional caption. */
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1, color: "var(--oc-primary)", ...sx }}
      {...props}
    >
      <CircularProgress size={size} sx={{ color: "var(--oc-primary)" }} />
      {label && <Typography sx={{ color: "var(--oc-text-muted)", fontSize: "var(--oc-fs-16)" }}>{label}</Typography>}
    </Box>
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  sx: PropTypes.object,
};
