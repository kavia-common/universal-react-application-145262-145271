import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Stack,
} from "@mui/material";

// PUBLIC_INTERFACE
export default function NavBar({
  branding = "Eventify",
  links = [],
  initialActive = links[0]?.id,
  onNavigate,
  rightSlot,
  sx = {},
  ...props
}) {
  /** A responsive top navigation bar with brand and links. */
  const [active, setActive] = useState(initialActive);

  const handleClick = (id) => {
    setActive(id);
    onNavigate?.(id);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(180deg, #ffffff, #fcfdff)",
        borderBottom: "1px solid var(--oc-border)",
        color: "var(--oc-text)",
        ...sx,
      }}
      {...props}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            background: "linear-gradient(135deg, var(--oc-primary), #1D4ED8)",
            boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)",
          }}
        />
        <Typography sx={{ fontWeight: 800, mr: 2 }}>{branding}</Typography>
        <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
          {links.map((l) => (
            <Button
              key={l.id}
              onClick={() => handleClick(l.id)}
              sx={{
                textTransform: "none",
                color: active === l.id ? "var(--oc-primary)" : "var(--oc-text)",
                backgroundColor:
                  active === l.id ? "rgba(37, 99, 235, 0.08)" : "transparent",
                border:
                  active === l.id
                    ? "1px solid rgba(37, 99, 235, 0.18)"
                    : "1px solid transparent",
                borderRadius: "var(--oc-radius-pill)",
              }}
            >
              {l.label}
            </Button>
          ))}
        </Stack>
        {rightSlot}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  branding: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ),
  initialActive: PropTypes.string,
  onNavigate: PropTypes.func,
  rightSlot: PropTypes.node,
  sx: PropTypes.object,
};
