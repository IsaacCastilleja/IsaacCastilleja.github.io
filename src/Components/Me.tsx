import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {JumpLinks} from "./JumpLinks";

export function Me() {
    const theme = useTheme();
    const isXsBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const isMdBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Stack>
            <Typography variant={(isMdBreakpoint && !isXsBreakpoint) ? "h3" : "h2"}>Isaac Castilleja</Typography>
            <Typography variant={"h4"}>Software Engineer</Typography>
            <Typography variant={"h6"} fontFamily={"EB Garamond"}>
                100 wpm btw
            </Typography>
            <JumpLinks></JumpLinks>
        </Stack>
    );
}