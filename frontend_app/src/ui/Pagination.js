import React from "react";
import PropTypes from "prop-types";
import { Pagination as MuiPagination } from "@mui/material";

// PUBLIC_INTERFACE
export default function Pagination({ page, count, onChange, sx = {}, ...props }) {
  /** Pagination control using Ocean primary for the active page. */
  return (
    <MuiPagination
      page={page}
      count={count}
      onChange={(_, val) => onChange?.(val)}
      sx={{
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "var(--oc-primary)",
          color: "#fff",
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "var(--oc-primary-soft-bg)",
        },
        ...sx,
      }}
      {...props}
    />
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  sx: PropTypes.object,
};
