import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Portfolio from './Portfolio';

// Create a theme with Roboto font
const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Portfolio />
            </div>
        </ThemeProvider>
    );
};

export default App;
