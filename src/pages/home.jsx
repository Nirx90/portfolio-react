import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Link,
  LinearProgress,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import NavBar from "../components/NavBar";
import CustomCard from "../components/CustomCards";
import { IconBrandAngular, IconBrandMongodb, IconBrandNodejs, IconBrandReact } from "@tabler/icons-react";

const skills = [
  { name: "React", level: 90, icon: <IconBrandReact /> },
  { name: "Node.js", level: 85, icon: <IconBrandNodejs /> },
  { name: "Angular", level: 80, icon: <IconBrandAngular /> },
  { name: "MongoDB", level: 75, icon: <IconBrandMongodb /> },
];

export default function HomePage() {
  return (
    <Box>
      <NavBar />

      <Box
        sx={{ bgcolor: "#1976d2", color: "white", py: 8, textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "self-start",
                width: "40%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "justify",
                }}
              >
                I am a dynamic and innovative developer specializing in website
                development, mobile app creation, and customized software
                solutions. I combine technical expertise with creative
                problem-solving to deliver high-quality digital products that
                meet the unique needs of my clients.
              </Typography>
            </Box>
            <Box>
              <Avatar
                src={
                  "https://cscdoc.in-maa-1.linodeobjects.com/CRM-ONE/staff/profileImage/profileImage-1747121255145-205727504.jpeg"
                }
                alt={"Profile_Image"}
                sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
              >
                N
              </Avatar>
              <Typography variant="h3" component="h1" gutterBottom>
                Nirav Chaudhari
              </Typography>
              <Typography variant="h6">Full Stack Developer</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            My Skills
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} md={6} key={skill.name}>
                <CustomCard>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar>{skill.icon}</Avatar>
                      <Box flexGrow={1}>
                        <Typography variant="h6">{skill.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {skill.level}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          color="secondary"
                          sx={{ mt: 1, height: 10, borderRadius: 5 }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ bgcolor: "#f5f5f5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={2}>
            {[
              {
                title: "Task Manager",
                desc: "A full-stack app to manage tasks with user roles and dashboards.",
              },
              {
                title: "Portfolio Website",
                desc: "This very site built with React and MUI.",
              },
              {
                title: "Expense Tracker",
                desc: "Track income, expenses and get monthly analytics.",
              },
            ].map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <CustomCard>
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2">{project.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">GitHub</Button>
                  </CardActions>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" gutterBottom>
            Feel free to reach out via email or connect on GitHub/LinkedIn.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="mailto:you@example.com" sx={{ mx: 1 }}>
              <Email fontSize="large" />
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              sx={{ mx: 1 }}
            >
              <GitHub fontSize="large" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              sx={{ mx: 1 }}
            >
              <LinkedIn fontSize="large" />
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
