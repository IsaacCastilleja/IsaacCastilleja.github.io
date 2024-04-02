import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Me() {
    const theme = useTheme();
    const isXsBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const isMdBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Stack sx={{ flexGrow: 1, position: isXsBreakpoint ? "static" : "fixed"}}>
            <Typography variant={(isMdBreakpoint && !isXsBreakpoint) ? "h3" : "h2"} overflow={"break-word"}>Isaac Castilleja</Typography>
            <Typography variant={"h4"}>Software Engineer</Typography>
        </Stack>
    );
}