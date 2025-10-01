import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { PersonIcon, SettingsIcon, LogoutIcon } from "./icons";

// PUBLIC_INTERFACE
export default function UserAvatarMenu({
  name = "Alex Doe",
  items = [
    { id: "profile", label: "Profile", icon: <PersonIcon /> },
    { id: "settings", label: "Settings", icon: <SettingsIcon /> },
    { id: "logout", label: "Logout", icon: <LogoutIcon /> },
  ],
  onAction,
  sx = {},
  ...props
}) {
  /** Avatar button that opens a menu with user actions. */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const initials = name
    .split(" ")
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={sx} {...props}>
        <Avatar sx={{ bgcolor: "var(--oc-primary)" }}>{initials}</Avatar>
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {items.map((it) => (
          <MenuItem
            key={it.id}
            onClick={() => {
              setAnchorEl(null);
              onAction?.(it.id);
            }}
          >
            {it.icon && <ListItemIcon>{it.icon}</ListItemIcon>}
            <ListItemText>{it.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

UserAvatarMenu.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, label: PropTypes.string, icon: PropTypes.node })
  ),
  onAction: PropTypes.func,
  sx: PropTypes.object,
};
