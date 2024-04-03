import {Divider, Stack, Box} from "@mui/material";
import "../css/sections.css";
import Typography from "@mui/material/Typography";
import QtLogo from "../assets/Qt_logo.png";
import PythonLogo from "../assets/python-logo-only.png";
import {ExperienceEntry} from "./ExperienceEntry";

export function Experience() {
    const fesEntry = {
        jobTitle: "Software Engineer I",
        company: "Frontier Electronic Systems",
        dates: "June 2023 - Present",
        skills: [
            {logo: PythonLogo, name: "Python"},
            {logo: QtLogo, name: "Qt/PyQt"},
        ],
        description: "Python developer. I liked making PyQt GUIs with Qt Designer at this job a lot. It felt really" +
            "good modernizing old, annoying LabView code into Python that could easily be read and maintained"
    }
    const fesInternEntry = {
        jobTitle: "Software Engineering Intern",
        company: "Frontier Electronic Systems",
        dates: "May 2022 - May 2023",
        skills: [
            {logo: PythonLogo, name: "Python"},
        ],
        description: "Python developer. I liked making PyQt GUIs with Qt Designer at this job a lot. It felt really" +
            "good modernizing old, annoying LabView code into Python that could easily be read and maintained"
    }
    return (
        <Box id={"Experience"}>
            <Typography variant={"h3"} className={"section-header"} paddingY={"1rem"}>Experience</Typography>
            <Divider></Divider>
            <Stack direction={"column"} rowGap={2}>
                <ExperienceEntry props={fesEntry}></ExperienceEntry>
                <ExperienceEntry props={fesInternEntry}></ExperienceEntry>
            </Stack>
        </Box>

    );
}

export default Experience;