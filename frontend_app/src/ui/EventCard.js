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
        borderRadius: "var(--oc-card-radius)",
        border: "1px solid var(--oc-border)",
        boxShadow: "var(--oc-shadow-sm)",
        overflow: "hidden",
        width: "var(--oc-card-width)",
        height: "var(--oc-card-height)",
        ...sx,
      }}
      {...props}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            position: "relative",
            width: "var(--oc-card-image-w)",
            minHeight: "var(--oc-card-image-h)",
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
                width: "var(--oc-star-size)",
                height: "var(--oc-star-size)",
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
              sx={{ fontSize: "var(--oc-fs-20)", fontWeight: "var(--oc-font-800)", lineHeight: 1.2, mb: 1 }}
            >
              {title}
            </Typography>
            <Typography
              sx={{ color: "var(--oc-text-muted)", fontSize: "var(--oc-fs-16)", fontWeight: "var(--oc-font-600)", mb: 0.5 }}
            >
              {dateVenue}
            </Typography>
            <Typography
              sx={{ color: "var(--oc-text-muted)", fontSize: "var(--oc-fs-14)", fontWeight: "var(--oc-font-400)", mb: 1.5 }}
            >
              {time}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalActivityIcon sx={{ color: "var(--oc-primary)" }} />
              <Typography
                sx={{ color: "var(--oc-primary)", fontSize: "var(--oc-fs-16)", fontWeight: "var(--oc-font-800)" }}
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
