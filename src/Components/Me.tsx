import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export function Me() {
    return (
        <Box sx={{ height: '100vh', position: "fixed"}}>
            <Stack>
                <Typography variant={"h1"}>Isaac Castilleja</Typography>
                <Typography variant={"h3"}>Software Engineer</Typography>
            </Stack>
        </Box>
    );
}