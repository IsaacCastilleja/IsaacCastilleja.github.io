import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export function Me() {
    return (
        <Stack sx={{ height: '100vh', flexGrow: 1, position: "fixed"}}>
            <Typography variant={"h2"}>Isaac Castilleja</Typography>
            <Typography variant={"h4"}>Software Engineer</Typography>
        </Stack>
    );
}