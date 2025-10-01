import React, { useState } from "react";
import EventCard from "../ui/EventCard";

export default {
  title: "Data Display/EventCard",
  component: EventCard,
};

export const Basic = {
  render: () => {
    const [fav, setFav] = useState(false);
    return (
      <div style={{ width: "var(--oc-card-width)" }}>
        <EventCard
          imageSrc="/assets/figma_image_2218_5335.png"
          category="Technology & Innovation"
          title="Event title that can go up to two lines"
          dateVenue="Date | Venue"
          time="00:00 AM - 00:00 PM"
          price="INR 499"
          interested={fav}
          onToggleInterested={() => setFav((f) => !f)}
        />
      </div>
    );
  },
};
