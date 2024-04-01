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
            <Grid container spacing={2} sx={{maxWidth: 'xl', mx: "auto", padding: "6rem"}}>
                <Grid md={4} sx={{padding: "1rem"}} xs={12}>
                    <Me></Me>
                </Grid>
                <Grid md={1} sx={{padding: "1rem"}} xs={12}>
                    <ResponsiveDivider></ResponsiveDivider>
                </Grid>
                <Grid md={7} sx={{padding: "1rem"}} xs={12}>
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
