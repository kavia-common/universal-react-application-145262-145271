import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";
import { ChevronRightIcon } from "./icons";

// PUBLIC_INTERFACE
export default function Breadcrumbs({ items = [], onNavigate, sx = {}, ...props }) {
  /** Breadcrumbs with Chevron separator; last item is not a link. */
  const lastIndex = items.length - 1;
  return (
    <MuiBreadcrumbs
      separator={<ChevronRightIcon fontSize="small" sx={{ color: "var(--oc-text-muted)" }} />}
      sx={sx}
      {...props}
    >
      {items.map((it, idx) =>
        idx === lastIndex ? (
          <Typography key={it.label} color="text.primary" sx={{ fontWeight: "var(--oc-font-600)" }}>
            {it.label}
          </Typography>
        ) : (
          <Link
            key={it.label}
            underline="hover"
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(it);
            }}
            href={it.href || "#"}
            sx={{ cursor: "pointer" }}
          >
            {it.label}
          </Link>
        )
      )}
    </MuiBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, href: PropTypes.string })
  ),
  onNavigate: PropTypes.func,
  sx: PropTypes.object,
};
