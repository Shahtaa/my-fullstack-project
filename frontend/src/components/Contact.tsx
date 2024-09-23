import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Container id="contact" style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Contact Me
            </Typography>
            <Typography variant="body1" align="center">
                Email: myemail@example.com
            </Typography>
            <Typography variant="body1" align="center">
                LinkedIn: <a href="https://www.linkedin.com/in/myprofile">My Profile</a>
            </Typography>
        </Container>
    );
};

export default Contact;
