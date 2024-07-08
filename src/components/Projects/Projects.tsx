import React from 'react';
import ProjectObject from "../ProjectObject/ProjectObject";
import projectsData from "../../data/projectsData";
import Project from '../../types/project';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {projectsData.map((project: Project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectObject project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
