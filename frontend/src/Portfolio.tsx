import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';

const Portfolio: React.FC = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif' }}>
                        My Portfolio
                    </Typography>
                    <Button color="inherit" href="#about">About Me</Button>
                    <Button color="inherit" href="#projects">My Projects</Button>
                    <Button color="inherit" href="#contact">Contact Me</Button>
                </Toolbar>
            </AppBar>

            <Container id="about" style={{ marginTop: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" align="center">
                    I am a passionate developer with a background in...
                </Typography>
            </Container>

            <Container id="projects" style={{ marginTop: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    My Projects
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300"
                                alt="Project 1"
                            />
                            <CardContent>
                                <Typography variant="h5">Project 1</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300"
                                alt="Project 2"
                            />
                            <CardContent>
                                <Typography variant="h5">Project 2</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300"
                                alt="Project 3"
                            />
                            <CardContent>
                                <Typography variant="h5">Project 3</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

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
        </div>
    );
};

export default Portfolio;
