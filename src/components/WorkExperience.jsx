import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  styled,
  Paper,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { useSelector } from "react-redux";

const experienceData = [
  {
    title: "Application Developer Associate",
    company: "Accenture PLTD.",
    duration: "August 2025 - Present",
    description: "Building Scalable web applications.",
  },
  {
    title: "Web Developer",
    company: "Digitalks Techno LLP.",
    duration: "September 2024 - July 2025",
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
    duration: "July 2018 - May 2022 6.7 CGPA",
  },
];

const WorkExperience = () => {
  const { DarkMode } = useSelector((state) => state.theme);

  const CustomStepIconRoot = styled("div")(() => ({
    backgroundColor: DarkMode ? "black" : "#e0e7ff",
    width: 32,
    height: 32,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: DarkMode ? "2px solid rgba(255, 255, 255, 0.3)" : "2px solid #1976D2",
    zIndex: 1,
    "& .MuiSvgIcon-root": {
      fontSize: "1rem",
    },
  }));

  const iconMap = {
    1: <WorkIcon  sx={{color : DarkMode ? "white" : "#1976D2"}} />,
    2: <WorkIcon sx={{color : DarkMode ? "white" : "#1976D2"}} />,
    3: <CodeIcon sx={{color : DarkMode ? "white" : "#1976D2"}} />,
    4: <SchoolIcon sx={{color : DarkMode ? "white" : "#1976D2"}} />,
  };

  const CustomStepIcon = (props) => {
    const { icon } = props;
    return <CustomStepIconRoot>{iconMap[String(icon)]}</CustomStepIconRoot>;
  };

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
          backgroundColor: DarkMode ? "black" : "rgba(255, 255, 255, 0.05)",
          borderRadius: 5,
          border: `1px solid rgba(255, 255, 255, 0.3)`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
          transition: "transform 0.3s ease",
          p: 5,
        }}
      >
        <Stepper orientation="vertical" activeStep={experienceData.length}>
          {experienceData.map((exp, index) => (
            <Step key={index} active>
              <StepLabel StepIconComponent={CustomStepIcon}>
                <Typography
                  variant="h6"
                  color={DarkMode ? "whitesmoke" : "rgba(0, 0, 0, 0.87)"}
                >
                  {exp.title}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography
                  variant="subtitle1"
                  color={DarkMode ? "whitesmoke" : "rgba(0, 0, 0, 0.87)"}
                  // color="text.secondary"
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", mb: 1 }}
                  color={DarkMode ? "whitesmoke" : "rgba(0, 0, 0, 0.87)"}
                >
                  {exp?.duration}
                </Typography>
                <Typography
                  variant="body2"
                  color={DarkMode ? "whitesmoke" : "rgba(0, 0, 0, 0.87)"}
                >
                  {exp.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Box>
  );
};

export default WorkExperience;
