import Container from "@mui/material/Container";
import {Divider} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../css/sections.css";
import Typography from "@mui/material/Typography";
export function AboutMe() {
    return (
        <Container>
            <Typography variant={"h2"} className={"section-header"}>About</Typography>
            <Divider></Divider>
            <Grid container spacing={2}>
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
                <Grid xs={8}>
                    <Typography variant={"body1"} className={"text-content"}>
                        A friend once told me that once you agree to making a GUI, you become the "GUI guy."
                        He was right. After, developing my first real user interface-- A touchscreen display for our
                        autonomous vehicle senior design project-- I was hooked. There's nothing quite like typing
                        away in an IDE, having a button appear in your browser, clicking it, and then seeing your
                        code executed in reply. I just like coding.
                    </Typography>
                    <Typography variant={"body1"} className={"text-content"}>
                        In my free time, I’m often found working on various projects with my friends or playing
                        video games with them. These days, I'm venturing into game development with one of them
                        and exploring embedded software with another. It’s about the joy of creating and solving
                        problems together, more than anything else.
                    </Typography>
                </Grid>

            </Grid>
        </Container>

    );
}

export default AboutMe;