import React from 'react';
import './App.css';
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import {Stack} from '@mui/material';
import { Me } from './Components/Me';
import ResponsiveDivider from "./Components/ResponsiveDivider";
import Projects from "./Components/Projects";


function App() {
    return (
        <Container maxWidth={'xl'} sx={{minHeight: "100vh"}}>
            <Grid container spacing={2}>
                <Grid xs={12} md={4}
                      sx={{
                          justifyContent: "space-between",
                          display: "flex",
                          position: {md: "sticky", xs: "static"},
                          top: 0,
                          height: "100%",
                          paddingY: "4rem"
                      }}
                >
                    <Me></Me>
                </Grid>
                <Grid md={1} sx={{paddingY: {md: "4rem", xs:"0rem"}}} xs={12}>
                    <ResponsiveDivider></ResponsiveDivider>
                </Grid>
                <Grid xs={12} md={7} sx={{paddingY: "4rem"}}>
                    <Stack rowGap={2}>
                        <AboutMe></AboutMe>
                        <Experience></Experience>
                        <Projects></Projects>
                    </Stack>
                </Grid>

            </Grid>

        </Container>
    );
}

export default App;
