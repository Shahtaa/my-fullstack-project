import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link, Box } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif' }}>
                    My Portfolio
                </Typography>
                {/* Center the buttons */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Button color="inherit" component={Link} href="#about">
                        About Me
                    </Button>
                    <Button color="inherit" component={Link} href="#projects">
                        My Projects
                    </Button>
                    <Button color="inherit" component={Link} href="#contact">
                        Contact Me
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
