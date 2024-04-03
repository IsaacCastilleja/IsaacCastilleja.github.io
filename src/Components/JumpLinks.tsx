import {Box, Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

interface section {
    name: string
}

function JumpLink(section: section) {
    return (
        <Link
            href={`#${section.name.replaceAll(" ", "")}`}
            width={0.5}
            className={"jump-link"}
            sx={{
                '&:hover, &:active': {
                    width: '0.75',
                },
            }}
        >
            <Stack direction={"row"} gap={1} width={1} alignItems={"center"}>
                <Box height={"1px"} width={0.5} sx={{backgroundColor: "white"}}></Box>
                <Typography width={0.5}>{section.name}</Typography>
            </Stack>
        </Link>
    );
}

export function JumpLinks() {
    return (
        <Stack direction={"column"} rowGap={1} my={"2rem"} width={1} alignItems={"start"}>
            <JumpLink name={"About Me"}></JumpLink>
            <JumpLink name={"Experience"}></JumpLink>
            <JumpLink name={"Projects"}></JumpLink>
        </Stack>
    );
}