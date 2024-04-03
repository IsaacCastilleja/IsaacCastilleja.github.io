import {Divider, Stack, Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/sections.css";
import Typography from "@mui/material/Typography";
import {ExperienceEntry} from "./ExperienceEntry";
export function Experience() {
    const fesEntry = {
        jobTitle: "Software Engineer I",
        company: "Frontier Electronic Systems",
        dates: "June 2023 - Present",
        description: "Python developer. I liked making PyQt GUIs with Qt Designer at this job a lot. It felt really" +
            "good modernizing old, annoying LabView code into Python that could easily be read and maintained"
    }
    const fesInternEntry = {
        jobTitle: "Software Engineering Intern",
        company: "Frontier Electronic Systems",
        dates: "May 2022 - May 2023",
        description: "Python developer. I liked making PyQt GUIs with Qt Designer at this job a lot. It felt really" +
            "good modernizing old, annoying LabView code into Python that could easily be read and maintained"
    }
    return (
        <Box>
            <Typography variant={"h3"} className={"section-header"} paddingY={"1rem"}>Experience</Typography>
            <Divider></Divider>
            <Stack direction={"column"}>
                <ExperienceEntry props={fesEntry}></ExperienceEntry>
                <ExperienceEntry props={fesInternEntry}></ExperienceEntry>
            </Stack>
        </Box>

    );
}

export default Experience;