import {Divider, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {DynamicChips} from "./DynamicChips";
export function ExperienceEntry({props}: {
    props: {
        jobTitle: string,
        company: string,
        dates: string,
        description: string,
        skills: {logo: string, name: string}[]
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
            <DynamicChips skills={props.skills}></DynamicChips>
        </Stack>
    );
}