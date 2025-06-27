import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";

const experienceData = [
  {
    title: "Web Developer",
    company: "Digitalks Techno LLP.",
    duration: "September 2024 - Present",
    description:
      "Building reusable UI components and optimizing performance with React and MUI.",
  },
  {
    title: "Web Developer Intern",
    company: "Pratian Technologies",
    duration: "August 2022 - March 2023",
    description:
      "Worked on internal dashboards, built responsive UIs, and learned agile workflows.",
  },
  {
    title: "Education",
    company: "Mechanical Engineer at SVNIT - Surat",
    duration: "July 2018 - May 2022",
  },
];

const WorkExperience = () => {
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
        }}
      >
        Work Experience
      </Typography>

      <Stepper
        orientation="vertical"
        activeStep={experienceData.length}
        sx={{
          mt: 5,
        }}
      >
        {experienceData.map((exp, index) => (
          <Step key={index} active >
            <StepLabel>
              <Typography variant="h6">{exp.title}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.company}
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>
                {exp?.duration}
              </Typography>
              <Typography variant="body2">{exp.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default WorkExperience;
