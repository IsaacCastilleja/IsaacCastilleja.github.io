import Container from "@mui/material/Container";
import {Divider, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../css/sections.css";
import Typography from "@mui/material/Typography";
export function Experience() {
    return (
        <Container>
            <Typography variant={"h2"} className={"section-header"}>Experience</Typography>
            <Divider></Divider>
            <Grid container spacing={2}>
                {/*Visualization*/}
                <Grid xs={4}>
                    <Box
                        my={4}
                        display="flex"
                        flexGrow={1}
                        alignItems="center"
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid grey' }}
                    >
                        This Box uses MUI System props for quick customization.
                    </Box>
                </Grid>
                {/*Actual text content*/}
                <Grid xs={8}>
                    <Stack
                        alignItems={"center"}
                        direction={"row"}
                        spacing={2}
                        divider={<Divider orientation={"vertical"} flexItem/>}
                    >
                        <Typography variant={"h5"} flex={1}>Software Engineer - Frontier Electronic Systems</Typography>
                        <Typography variant={"h6"} className={"time-range"}>June 2023 - Present</Typography>
                    </Stack>
                    <Typography variant={"body1"} className={"text-content"}>
                        Python developer. I liked making PyQt GUIs with Qt Designer at this job a lot.
                        It felt really good modernizing old, annoying LabView code into Python that could
                        easily be read and maintained
                    </Typography>
                </Grid>

            </Grid>
        </Container>

    );
}

export default Experience;