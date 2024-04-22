import {Avatar, Chip, Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {JumpLinks} from "./JumpLinks";

import GitHubLogo from "../assets/github-mark-white.svg";
import LinkedInLogo from "../assets/linkedIn.png";
import emailIcon from "../assets/emailIcon.jpg";

export function Me() {
    const theme = useTheme();
    const isXsBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const isMdBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Stack>
            <Typography variant={(isMdBreakpoint && !isXsBreakpoint) ? "h3" : "h2"}>Isaac Castilleja</Typography>
            <Typography variant={"h4"}>Software Engineer</Typography>
            <Typography variant={"h6"} fontFamily={"EB Garamond"}>
            I craft visual solutions for complex problems
            </Typography>
            <JumpLinks></JumpLinks>
            <Stack gap={1}>
                <Link href="https://github.com/IsaacCastilleja" underline={"none"}>
                    <Chip
                        avatar={<Avatar alt={"G"} src={GitHubLogo}/>}
                        label={"GitHub"}
                        sx={{
                            alignItems: "end",
                            color: "#ffffff",
                            fontWeight: "bolder",
                            background: "transparent"
                        }}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/isaac-castilleja-760a0b187" underline={"none"}>
                    <Chip
                        avatar={<Avatar alt={"G"} src={LinkedInLogo}/>}
                        label={"LinkedIn"}
                        sx={{
                            alignItems: "end",
                            color: "#ffffff",
                            fontWeight: "bolder",
                            background: "transparent"
                        }}
                    />
                </Link>
                <Link href="mailto:isaaccastilleja6@gmail.com" underline={"none"}>
                    <Chip
                        avatar={<Avatar alt={"E"} src={emailIcon}/>}
                        label={"isaaccastilleja6@gmail.com"}
                        sx={{
                            alignItems: "end",
                            color: "#ffffff",
                            fontWeight: "bolder",
                            background: "transparent"
                        }}
                    />
                </Link>
            </Stack>
        </Stack>
    );
}