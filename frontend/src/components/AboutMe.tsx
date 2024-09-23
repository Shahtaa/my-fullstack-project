import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutMe: React.FC = () => {
    return (
        <Container id="about" style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" align="center">
                I am a passionate developer with a background in...
            </Typography>
        </Container>
    );
};

export default AboutMe;
