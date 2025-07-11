import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import { IconSettings } from "@tabler/icons-react";
import SettingReview from "./settings/SetingReview";

// Dummy data
const reviews = [
  {
    name: "John Doe",
    title: "Project Manager",
    review:
      "Fantastic work! Always delivers on time and the quality is top-notch.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    title: "Team Lead",
    review: "Very responsive and creative. Love the UI/UX decisions made.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    title: "Product Owner",
    review: "Good communication and reliable work, happy to collaborate again.",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  // {
  //   name: "Emily Johnson",
  //   title: "CTO",
  //   review: "Incredible attention to detail and modern design choices!",
  //   rating: 5,
  //   image: "https://randomuser.me/api/portraits/women/68.jpg",
  // },
  // {
  //   name: "Chris Lee",
  //   title: "Designer",
  //   review: "A pleasure to work with, understands design needs perfectly.",
  //   rating: 4,
  //   image: "https://randomuser.me/api/portraits/men/24.jpg",
  // },
];

export default function ReviewsSection() {
  const { DarkMode, Animation } = useSelector((state) => state.theme);
  const reviewCss = useSelector((state) => state.review);

  const [settingDialog, setSettingDialog] = useState(false);

  return (
    <Box>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 10,
            color: DarkMode ? "whitesmoke" : "",
          }}
        >
          Latest Reviews
        </Typography>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 5,
                  background: reviewCss.BackgroundColor,
                  backgroundSize: Animation ? "400% 400%" : "100%",
                  animation: "gradientShift 8s ease infinite",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: `${reviewCss.BorderWidth}px solid ${reviewCss.BorderColor}`,
                  boxShadow: reviewCss.BoxShadow,
                  "&:hover .settings-popup": {
                    opacity: 1,
                    color: reviewCss.TextColor,
                  },
                }}
              >
                <CardContent>
                  <Box
                    className="settings-popup"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                      opacity: 0,
                    }}
                  >
                    <IconSettings
                      onClick={() => setSettingDialog(true)}
                      cursor="pointer"
                    />
                  </Box>
                  <Stack spacing={2} alignItems="center">
                    <Avatar
                      src={review.image}
                      alt={review.name}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: reviewCss.TextColor }}
                    >
                      {review.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: reviewCss.TextColor }}
                    >
                      {review.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", color: reviewCss.TextColor }}
                    >
                      "{review.review}"
                    </Typography>
                    <Box>
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < review.rating ? (
                          <StarIcon
                            key={i}
                            sx={{ color: reviewCss.IconColor }}
                          />
                        ) : (
                          <StarBorderIcon
                            key={i}
                            sx={{ color: reviewCss.IconColor }}
                          />
                        )
                      )}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <SettingReview
          open={settingDialog}
          onClose={() => setSettingDialog(false)}
        />
      </Container>
    </Box>
  );
}
