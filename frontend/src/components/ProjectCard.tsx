// ProjectCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description }) => {
    return (
        <Card>
            <CardMedia component="img" height="140" image={image} alt={title} />
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
