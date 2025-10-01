import React from "react";
import UserAvatarMenu from "../ui/UserAvatarMenu";

export default {
  title: "Navigation/UserAvatarMenu",
  component: UserAvatarMenu,
};

export const Basic = {
  render: () => (
    <UserAvatarMenu name="Alex Doe" onAction={(id) => alert(id)} />
  ),
};
