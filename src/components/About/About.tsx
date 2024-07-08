import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const About = () => {
  const info = {
    name: 'Nicholas',
    role: 'Student',
    description:
      'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    }
  };

  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 720, width: '100%', p: 2 }}>
          <CardContent>
            <Box sx={{textAlign: 'center' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Hi, I am {info.name}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                A {info.role}
              </Typography>
              <Typography variant="body1">
                {info.description}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Link href={info.social.github} aria-label='github' color="inherit">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href={info.social.linkedin} aria-label='linkedin' color="inherit">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
