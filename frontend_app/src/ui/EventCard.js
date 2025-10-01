import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Tag } from "./Tags";
import {
  StarIcon,
  StarOutlineIcon,
  LocalActivityIcon,
} from "./icons";

// PUBLIC_INTERFACE
export default function EventCard({
  imageSrc = "/assets/figma_image_2218_5205.png",
  category = "Technology & Innovation",
  title = "Event title that can go up to two lines",
  dateVenue = "Date | Venue",
  time = "00:00 AM - 00:00 PM",
  price = "INR 499",
  interested = false,
  onToggleInterested,
  sx = {},
  ...props
}) {
  /** Card used in search results: left image, right details, with overlay category and favorite star. */
  return (
    <Card
      sx={{
        borderRadius: "var(--oc-radius-lg)",
        border: "1px solid var(--oc-border)",
        boxShadow: "var(--oc-shadow-sm)",
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            position: "relative",
            minHeight: 208,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={{ position: "absolute", top: 10, left: 10 }}>
            <Tag label={category} color="primary" />
          </Box>
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <IconButton
              aria-label="Interested"
              onClick={onToggleInterested}
              sx={{
                width: 48,
                height: 48,
                background: "#fff",
                border: "1px solid var(--oc-border)",
                boxShadow: "var(--oc-shadow-sm)",
                "&:hover": { background: "#fff" },
              }}
            >
              {interested ? (
                <StarIcon sx={{ color: "#FBBF24" }} />
              ) : (
                <StarOutlineIcon sx={{ color: "var(--oc-text-muted)" }} />
              )}
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ p: 2.5 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, lineHeight: 1.2, mb: 1 }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "var(--oc-text-muted)", fontWeight: 600, mb: 0.5 }}
            >
              {dateVenue}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "var(--oc-text-muted)", mb: 1.5 }}
            >
              {time}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalActivityIcon sx={{ color: "var(--oc-primary)" }} />
              <Typography
                variant="subtitle1"
                sx={{ color: "var(--oc-primary)", fontWeight: 800 }}
              >
                {price}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  dateVenue: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string,
  interested: PropTypes.bool,
  onToggleInterested: PropTypes.func,
  sx: PropTypes.object,
};
