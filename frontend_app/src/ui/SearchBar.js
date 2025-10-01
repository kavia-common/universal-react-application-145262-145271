import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Box,
  InputBase,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import Dropdown from "./Dropdown";
import {
  SearchIcon,
  CloseIcon,
  LocationOnIcon,
  ArrowDropDownIcon,
} from "./icons";

// PUBLIC_INTERFACE
export default function SearchBar({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = "Search events",
  location,
  locations = [],
  onLocationChange,
  sx = {},
  ...props
}) {
  /** Search bar with input and a location dropdown, matching Figma scale and styling. */
  const showClear = useMemo(() => (value ?? "").length > 0, [value]);

  const triggerSubmit = () => {
    if (onSubmit) onSubmit({ query: value, location });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: "16px",
        border: "1px solid var(--oc-border)",
        boxShadow: "var(--oc-shadow-sm)",
        background: "var(--oc-surface)",
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ height: 80, px: 2 }}
      >
        <SearchIcon sx={{ color: "var(--oc-text-muted)" }} />
        <InputBase
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") triggerSubmit();
          }}
          sx={{
            flex: 1,
            fontSize: 18,
            fontWeight: 600,
          }}
          inputProps={{ "aria-label": placeholder }}
        />
        {showClear && (
          <IconButton aria-label="Clear" onClick={() => onClear?.()}>
            <CloseIcon />
          </IconButton>
        )}
        <Divider orientation="vertical" flexItem />
        <Box sx={{ minWidth: 240 }}>
          <Dropdown
            label=""
            value={location}
            onChange={(e) => onLocationChange?.(e.target.value)}
            options={locations}
            placeholder="Select location"
            startAdornment={
              <LocationOnIcon sx={{ color: "var(--oc-primary)" }} />
            }
            IconComponent={ArrowDropDownIcon}
            sx={{
              "& .MuiSelect-select": { py: 1.5, fontWeight: 600 },
            }}
          />
        </Box>
        <IconButton
          color="primary"
          onClick={triggerSubmit}
          aria-label="Search"
          sx={{
            ml: 1,
            background: "var(--oc-primary)",
            color: "#fff",
            borderRadius: "12px",
            "&:hover": { background: "var(--oc-primary)" },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  location: PropTypes.string,
  locations: PropTypes.array,
  onLocationChange: PropTypes.func,
  sx: PropTypes.object,
};
