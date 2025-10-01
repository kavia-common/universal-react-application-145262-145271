import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Typography } from "@mui/material";
import { SearchIcon } from "./icons";
import { PrimaryButton } from "./Buttons";

// PUBLIC_INTERFACE
export default function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or filters.",
  actionLabel,
  onAction,
  sx = {},
  ...props
}) {
  /** Empty state with icon, message, and optional primary action button. */
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        textAlign: "center",
        borderRadius: "var(--oc-radius-lg)",
        border: "1px solid var(--oc-border)",
        boxShadow: "var(--oc-shadow-sm)",
        ...sx,
      }}
      {...props}
    >
      <Box sx={{ display: "inline-flex", p: 2, borderRadius: "50%", background: "rgba(37,99,235,0.08)", mb: 1 }}>
        <SearchIcon sx={{ color: "var(--oc-primary)" }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "var(--oc-text-muted)", mb: 2 }}>{description}</Typography>
      {actionLabel && (
        <PrimaryButton onClick={onAction}>{actionLabel}</PrimaryButton>
      )}
    </Paper>
  );
}

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  sx: PropTypes.object,
};
