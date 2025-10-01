import React from "react";
import EmptyState from "../ui/EmptyState";

export default {
  title: "Data Display/EmptyState",
  component: EmptyState,
};

export const Basic = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <EmptyState
        title="No matching events"
        description="Try changing your filters like date, category, or city."
        actionLabel="Clear Filters"
        onAction={() => alert("Clear filters")}
      />
    </div>
  ),
};
