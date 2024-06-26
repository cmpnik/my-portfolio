import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Button, Card, CardActions, CardContent, Typography, Box } from '@mui/material';
import Project from '../../types/project';

const ProjectObject = ({ project }: { project: Project }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 2, display: 'flex', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <Box component="li" key={tag} sx={{ backgroundColor: '#f0f0f0', borderRadius: 1, p: 1, mr: 1, mb: 1 }}>
              {tag}
            </Box>
          ))}
        </Box>
      </CardContent>

      <CardActions>
        <Button href={project.repository} startIcon={<GitHubIcon />}>
          GitHub
        </Button>
        <Button href={project.page} startIcon={<LaunchIcon />}>
          View Project
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectObject;
