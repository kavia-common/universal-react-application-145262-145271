import React, { useState } from "react";
import Pagination from "../ui/Pagination";

export default {
  title: "Navigation Aids/Pagination",
  component: Pagination,
};

export const Basic = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} count={10} onChange={setPage} />;
  },
};
