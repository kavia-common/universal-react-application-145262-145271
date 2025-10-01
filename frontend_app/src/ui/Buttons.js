import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

// PUBLIC_INTERFACE
export function PrimaryButton({ children, sx = {}, ...props }) {
  /** A primary action button using Ocean primary color and soft shadow. */
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        fontWeight: "var(--oc-font-700)",
        borderRadius: "var(--oc-radius-pill)",
        boxShadow: "var(--oc-shadow-btn-primary)",
        backgroundColor: "var(--oc-primary)",
        "&:hover": {
          backgroundColor: "var(--oc-primary)",
          filter: "brightness(0.95)",
          transform: "translateY(-1px)",
          transition: "var(--oc-transition)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

// PUBLIC_INTERFACE
export function OutlineButton({ children, sx = {}, ...props }) {
  /** A neutral outline button that accents to Ocean primary on hover. */
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "none",
        fontWeight: "var(--oc-font-600)",
        borderRadius: "var(--oc-radius-pill)",
        borderColor: "var(--oc-border)",
        color: "var(--oc-text)",
        "&:hover": {
          borderColor: "var(--oc-primary)",
          color: "var(--oc-primary)",
          transition: "var(--oc-transition)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

OutlineButton.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default { PrimaryButton, OutlineButton };
