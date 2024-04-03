import {Divider, Stack, Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export function ExperienceEntry({props}: {
    props: {
        jobTitle: string,
        company: string,
        dates: string,
        location: string,
        description: string,
    }
    })
{
    return (
        <Stack direction={"column"}>
            <Grid container spacing={0} flexGrow={1}>
                <Grid xs={7}>
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1rem", sm: "1.5rem", md: "1.75rem"},
                            fontWeight: "bold",
                        }}
                    >{props.jobTitle}</Typography>
                </Grid>
                <Grid xs={5}>
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        flexDirection={"row-reverse"}
                        height={1}
                        alignItems={"end"}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1rem", sm: "1.25rem", md: "1.5rem"},
                        }}
                    >{props.dates}</Typography>
                </Grid>
                <Grid xs={7}>
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1rem", sm: "1.25rem", md: "1.5rem"},
                        }}
                    >{props.company}</Typography>
                </Grid>
                <Grid xs={5}>
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        flexDirection={"row-reverse"}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1rem", sm: "1.25rem", md: "1.5rem"},
                        }}
                    >{props.location}</Typography>
                </Grid>
                <Grid xs={12}   height={"min-content"}>
                    <Typography variant={"body1"} className={"text-content"}>{props.description}</Typography>
                </Grid>
            </Grid>
            {/*Visualization*/}
            <Stack
                my={1}
                display="flex"
                flexGrow={1}
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                This Box uses MUI System props for quick customization.
            </Stack>

        </Stack>
    );
}