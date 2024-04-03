import {Divider, Stack, Typography, Chip, Avatar} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import QtLogo from "../assets/Qt_logo.png";
import PythonLogo from "../assets/python-logo-only.png";
export function ExperienceEntry({props}: {
    props: {
        jobTitle: string,
        company: string,
        dates: string,
        description: string,
    }
    })
{
    return (
        <Stack direction={"column"}>
            <Grid container spacing={0} flexGrow={1}>
                <Grid xs={12}>
                    <Typography
                        variant={"subtitle2"}
                        display={"flex"}
                        flexGrow={1}
                        height={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1rem", sm: "1rem", md: "1.25rem"},
                            fontStyle: "italic",
                        }}
                    >{props.dates}</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1.25rem", sm: "1.5rem", md: "1.75rem"},
                            fontWeight: "bold",
                        }}
                    >{props.jobTitle}</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1.25rem", sm: "1.5rem", md: "1.5rem"},
                        }}
                    >{props.company}</Typography>
                </Grid>
                <Grid xs={12}>
                    <Divider sx={{borderColor: "dimgrey", marginY: "5px"}}></Divider>
                </Grid>
                <Grid xs={12}   height={"min-content"}>
                    <Typography variant={"body1"} fontFamily={"EB Garamond"}>{props.description}</Typography>
                </Grid>

            </Grid>
            {/*Visualization*/}
            <Stack
                my={1}
                direction={"row"}
                display="flex"
                flexGrow={1}
                gap={2}
            >
                <Chip
                    avatar={<Avatar alt="Python" src={PythonLogo}/>}
                    label="Python"
                    sx={{
                      color: "#ffffff",
                      fontWeight: "bolder",
                      background: "linear-gradient(to right, #0A39E8, #1595E8)"
                    }}
                />
                <Chip
                    avatar={<Avatar alt="Qt" src={QtLogo} />}
                    label="Qt/PyQt"
                    sx={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        background: "linear-gradient(to right, #0A39E8, #1595E8)"
                    }}
                />

            </Stack>

        </Stack>
    );
}