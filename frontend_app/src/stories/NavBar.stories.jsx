import React from "react";
import NavBar from "../ui/NavBar";
import UserAvatarMenu from "../ui/UserAvatarMenu";

export default {
  title: "Navigation/NavBar",
  component: NavBar,
};

export const Basic = {
  render: () => (
    <NavBar
      branding="Eventify"
      links={[
        { id: "home", label: "Home" },
        { id: "events", label: "Events" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
      ]}
      rightSlot={<UserAvatarMenu name="Alex Doe" />}
      onNavigate={(id) => console.log("navigate->", id)}
    />
  ),
};
