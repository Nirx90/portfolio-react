import React, { useState } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  styled,
  Paper,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { useSelector } from "react-redux";
import { IconSettings } from "@tabler/icons-react";
import SettingExperience from "./settings/SettingExperience";

const WorkExperience = () => {
  const [settingDialog, setSettingDialog] = useState(false);
  const { DarkMode, Animation } = useSelector((state) => state.theme);
  const experienceCss = useSelector((state) => state.experience);

  const experienceData = [
    {
      icon: <WorkIcon sx={{ color: experienceCss.IconColor }} />,
      title: "Application Developer Associate",
      company: "Accenture PLTD.",
      duration: "August 2025 - Present",
      description: "Building Scalable web applications.",
    },
    {
      icon: <WorkIcon sx={{ color: experienceCss.IconColor }} />,
      title: "Executive Developer",
      company: "Digitalks Techno LLP.",
      duration: "September 2024 - July 2025",
      description:
        "Building reusable UI components and optimizing performance with React and MUI.",
    },
    {
      icon: <CodeIcon sx={{ color: experienceCss.IconColor }} />,
      title: "Web Developer Intern",
      company: "Pratian Technologies",
      duration: "August 2022 - March 2023",
      description:
        "Worked on internal dashboards, built responsive UIs, and learned agile workflows.",
    },
    {
      icon: <SchoolIcon sx={{ color: experienceCss.IconColor }} />,
      title: "Education",
      company: "Mechanical Engineer at SVNIT - Surat",
      duration: "July 2018 - May 2022",
      description: "6.7 CGPA",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 10,
          color: DarkMode ? "whitesmoke" : "rgba(0, 0, 0, 0.87)",
        }}
      >
        Work Experience
      </Typography>
      <Paper
        sx={{
          background: experienceCss.BackgroundColor,
          backgroundSize: Animation ? "400% 400%" : "100%",
          animation: "gradientShift 8s ease infinite",
          borderRadius: experienceCss.BorderRadious,
          border: `${experienceCss.BorderWidth}px solid ${experienceCss.BorderColor}`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: experienceCss.BoxShadow,
          transition: "transform 0.3s ease",
          p: 5,
          "&:hover .settings-popup": {
            opacity: 1,
            color: experienceCss.TextColor,
          },
        }}
      >
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
        {experienceData.map((exp, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  border: `2px solid ${experienceCss.IconColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  borderRadius: "50%",
                }}
              >
                {exp.icon}
              </Box>
              <Divider
                orientation="vertical"
                sx={{
                  background: experienceCss.IconColor,
                  width: 1.5,
                  height: 95,
                  opacity: index === experienceData.length - 1 ? 0 : 1,
                }}
              />
            </Box>
            <Box sx={{ mb: 2.9, mt: 0.8 }}>
              <Typography
                variant="h6"
                sx={{color : experienceCss.TextColor}}
                >
                {exp.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{color : experienceCss.TextColor}}
                >
                {exp.company}
              </Typography>
              <Typography
                variant="body2"
                sx={{color : experienceCss.TextColor, fontStyle: "italic", mb: 1}}
                >
                {exp?.duration}
              </Typography>
              <Typography
                variant="body2"
                sx={{color : experienceCss.TextColor}}
              >
                {exp.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
      <SettingExperience
        open={settingDialog}
        onClose={() => setSettingDialog(false)}
      />
    </Box>
  );
};

export default WorkExperience;
