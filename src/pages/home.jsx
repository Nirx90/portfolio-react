import React from 'react';
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
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Avatar
            alt="Your Name"
            src="/avatar.jpg" // Replace with your image
            sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
          />
          <Typography variant="h3" component="h1" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="h6">
            Full Stack Developer | React | Node.js | .NET
          </Typography>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            I am a passionate developer with 4+ years of experience in building responsive web apps.
            Skilled in React, Node.js, and .NET backend systems. I love building beautiful UIs and efficient APIs.
          </Typography>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Task Manager', desc: 'A full-stack app to manage tasks with user roles and dashboards.' },
              { title: 'Portfolio Website', desc: 'This very site built with React and MUI.' },
              { title: 'Expense Tracker', desc: 'Track income, expenses and get monthly analytics.' },
            ].map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2">{project.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">GitHub</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
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
            <Link href="https://github.com/yourusername" target="_blank" sx={{ mx: 1 }}>
              <GitHub fontSize="large" />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" sx={{ mx: 1 }}>
              <LinkedIn fontSize="large" />
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
