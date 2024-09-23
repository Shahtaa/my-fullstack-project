// Projects.tsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const projectsData = [
    { id: 1, title: 'Project 1', image: 'https://via.placeholder.com/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Project 2', image: 'https://via.placeholder.com/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Project 3', image: 'https://via.placeholder.com/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Projects: React.FC = () => {
    return (
        <Container id="projects" style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                My Projects
            </Typography>
            <Grid container spacing={4}>
                {projectsData.map(project => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
