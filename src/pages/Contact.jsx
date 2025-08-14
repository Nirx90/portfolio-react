import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mb: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out via email or connect on GitHub/LinkedIn.
      </Typography>
      <Box sx={{ mt: 2 }}>
        {/* <Link href="mailto:you@example.com" sx={{ mx: 1 }}>
            <Email fontSize="large" />
          </Link> */}
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
  );
};

export default Contact;
