import React from 'react';
import './App.css';
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from '@mui/material';
import { Me } from './Components/Me';

function App() {
    return (
        <div className="App">
            <Grid container spacing={2} sx={{maxWidth: 'xl', mx: "auto", padding: "6rem"}}>
                <Grid xs={6} sx={{padding: "1rem"}}>
                    <Me></Me>
                </Grid>
                <Grid xs={6} sx={{padding: "1rem"}}>
                    <Box sx={{ height: '100vh' }}>
                        <AboutMe></AboutMe>
                        <Experience></Experience>
                        <Experience></Experience>
                        <Experience></Experience>
                    </Box>
                </Grid>

            </Grid>

        </div>
    );
}

export default App;
