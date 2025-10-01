import React from "react";
import PropTypes from "prop-types";
import { Box, Link, Stack, Typography } from "@mui/material";

// PUBLIC_INTERFACE
export default function Footer({
  links = [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Status", href: "#status" },
  ],
  note = `© ${new Date().getFullYear()} Eventify • Built with React`,
  sx = {},
  ...props
}) {
  /** Site footer with note and links. */
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid var(--oc-border)",
        background: "var(--oc-surface)",
        py: 2,
        ...sx,
      }}
      {...props}
    >
      <Box className="container" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Typography sx={{ color: "var(--oc-text-muted)" }}>{note}</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {links.map((l) => (
            <Link key={l.label} href={l.href} sx={{ color: "var(--oc-text-muted)", "&:hover": { color: "var(--oc-text)" } }}>
              {l.label}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })),
  note: PropTypes.string,
  sx: PropTypes.object,
};
