import {Divider, Stack, Typography, Box, Link} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {DynamicChips} from "./DynamicChips";
export function ProjectEntry({props}: {
    props: {
        demoAlt: string | undefined;
        name: string,
        dates: string,
        description: string,
        demo: string,
        demoType: string,
        link: string | undefined;
        skills: {logo: string, name: string}[],
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
                    {props.link ?
                    <Link
                        href={props.link}
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1.25rem", sm: "1.5rem", md: "1.75rem"},
                            fontWeight: "bold",
                        }}
                    >{props.name}</Link>
                    :
                    <Typography
                        variant={"h5"}
                        display={"flex"}
                        flexGrow={1}
                        sx={{
                            fontFamily: "EB Garamond",
                            fontSize: {xs: "1.25rem", sm: "1.5rem", md: "1.75rem"},
                            fontWeight: "bold",
                        }}
                    >{props.name}</Typography>
                    }
                </Grid>
                <Grid xs={12}>
                    <Divider sx={{borderColor: "dimgrey", marginY: "5px"}}></Divider>
                </Grid>
                <Grid xs={12}   height={"min-content"}>
                    <Typography variant={"body1"} fontFamily={"EB Garamond"} fontSize={"1.15rem"}>{props.description}</Typography>
                </Grid>
                <Grid xs={12}>
                    {props.demoType === "video" ? (
                        <Box
                            display={"flex"}
                            flex={1} flexGrow={1}
                            minHeight={"128px"}
                            width={1}
                            justifyContent={"center"}
                            alignItems={"center"}
                            border={"3px solid dimgrey"}
                            borderRadius={"3px"}
                            my={"1rem"}
                        >
                            <video height={"100%"} width={"100%"} controls preload={"auto"}>
                                <source src={props.demoAlt} type="video/x-m4v"/>
                                <source src={props.demo} type={"video/mp4"}/>
                            </video>
                        </Box>

                    ) : (
                        <Box
                            component={"img"}
                            display={"flex"}
                            flex={1} flexGrow={1}
                            minHeight={"128px"}
                            maxHeight={"480px"}
                            width={1}
                            justifyContent={"center"}
                            alignItems={"center"}
                            my={"1rem"}
                            border={"3px solid dimgrey"}
                            borderRadius={"3px"}
                            src={props.demo}
                            alt={"project demo"}
                            sx={{objectFit: 'contain'}}
                        >
                        </Box>
                    )}
                </Grid>
            </Grid>
            <DynamicChips skills={props.skills}></DynamicChips>
        </Stack>
    );
}