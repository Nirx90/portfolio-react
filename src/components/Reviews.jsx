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
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import {
  IconArrowLeft,
  IconArrowRight,
  IconSettings,
} from "@tabler/icons-react";
import SettingReview from "./settings/SetingReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

// Dummy data
const reviews = [
  {
    name: "Parth Makwana",
    title: "Web Developer",
    review: "Fantastic work! Always delivers on time and the quality is top-notch.",
    rating: 5,
    image: "https://digitalks-crm-bucket.s3.ap-south-1.amazonaws.com/plantoo/items-images/Parth.png",
  },
  {
    name: "Muskaan Kazi",
    title: "Tester",
    review: "Very responsive and creative. Love the UI/UX decisions made.",
    rating: 4,
    image: "https://digitalks-crm-bucket.s3.ap-south-1.amazonaws.com/Plantoo/items/images/muskaan.png",
  },
  {
    name: "Shakshi Shankar",
    title: "Data Anlyst",
    review: "Good communication and reliable work, happy to collaborate again.",
    rating: 3,
    image: "",
  },
  {
    name: "Manthan Vaghasiya",
    title: "Founder & CEO",
    review: "Incredible attention to detail and modern design choices!",
    rating: 5,
    image: "https://digitalks-crm-bucket.s3.ap-south-1.amazonaws.com/Plantoo/staff/profileImage/Screenshot 2025-09-16 164711.png",
  },
  {
    name: "Prince Sojitra",
    title: "Developer",
    review: "A pleasure to work with, understands functionality needs perfectly.",
    rating: 4,
    image: "https://digitalks-crm-bucket.s3.ap-south-1.amazonaws.com/Plantoo/staff/profileImage/Screenshot 2025-09-17 144154.png",
  },
];

export default function ReviewsSection() {
  const { DarkMode, Animation, HeaderColor } = useSelector(
    (state) => state.theme
  );
  const reviewCss = useSelector((state) => state.review);

  const [settingDialog, setSettingDialog] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const paginationDotsCss = {
    p: 1,
    borderRadius: 5,
    background: reviewCss.BackgroundColor,
    backgroundSize: Animation ? "400% 400%" : "100%",
    animation: Animation ? "gradientShift 8s ease infinite" : "none",
    border: `${reviewCss.BorderWidth}px solid ${reviewCss.BorderColor}`,
    boxShadow: reviewCss.BoxShadow,
    transition: "transform 0.3s ease",
    position: "absolute",
    top: "91%",
    zIndex: 2,
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 10,
            color: HeaderColor,
          }}
        >
          Latest Reviews
        </Typography>

        <Box sx={{ position: "relative", width: "100%" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
            style={{ padding: "20px 25px 80px 28px" }} // reserve space for dots
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: 5,
                    position: "relative",
                    background: reviewCss.BackgroundColor,
                    backgroundSize: Animation ? "400% 400%" : "100%",
                    animation: Animation
                      ? "gradientShift 8s ease infinite"
                      : "none",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: `${reviewCss.BorderWidth}px solid ${reviewCss.BorderColor}`,
                    // boxShadow: reviewCss.BoxShadow,
                    boxShadow: reviewCss.BoxShadow,
                    transition: "transform 0.3s ease",
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
                        transition: "opacity 0.3s ease",
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
                        sx={{ color: reviewCss.TextColor, textAlign:'center' }}
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
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx="true">{`
            .swiper-pagination-bullet {
              width: 18px;
              height: 18px;
              border: ${reviewCss.BorderWidth}px solid ${reviewCss.BorderColor};
              border-radius: 50%;
              background: ${reviewCss.BackgroundColor};
              background-size: ${Animation ? "400% 400%" : "100%"};
              animation: ${Animation
                ? "gradientShift 8s ease infinite"
                : "none"};
              box-shadow: ${reviewCss.BoxShadow};
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              transition: transform 0.3s ease, background 0.3s ease;
              opacity: 1;
              margin: 0 4px;
            }

            .swiper-pagination-bullet-active {
              transform: scale(1.5);
              border-color: ${reviewCss.BorderColor};
            }
          `}</style>

          {/* Custom Prev/Next buttons */}
          <IconButton
            className="custom-prev"
            sx={{
              ...paginationDotsCss,
              right: isMobile ? "75%" : "58%",
            }}
          >
            <IconArrowLeft color={`${reviewCss.IconColor}`} />
          </IconButton>

          <IconButton
            className="custom-next"
            sx={{
              ...paginationDotsCss,
              right: isMobile ? "10%" : "37%",
            }}
          >
            <IconArrowRight color={`${reviewCss.IconColor}`} />
          </IconButton>
        </Box>

        {/* <Grid container spacing={4}>
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
        </Grid> */}
        <SettingReview
          open={settingDialog}
          onClose={() => setSettingDialog(false)}
        />
      </Container>
    </Box>
  );
}
