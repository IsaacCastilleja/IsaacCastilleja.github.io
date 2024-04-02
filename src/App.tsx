import React from 'react';
import './App.css';
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Grid from "@mui/material/Unstable_Grid2";
import {Box} from '@mui/material';
import { Me } from './Components/Me';
import ResponsiveDivider from "./Components/ResponsiveDivider";


function App() {
    return (
        <div className="App">
            <Grid container spacing={2}
                  sx={{
                      maxWidth: 'xl',
                      mx: "auto",
                      padding: {xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem", xl:"5rem"},
                  }}
            >
                <Grid xs={12} md={4} sx={{padding: "1rem"}}>
                    <Me></Me>
                </Grid>
                <Grid md={1} sx={{padding: "1rem"}} xs={12}>
                    <ResponsiveDivider></ResponsiveDivider>
                </Grid>
                <Grid xs={12} md={7} sx={{padding: "1rem"}}>
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
