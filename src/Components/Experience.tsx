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
        description: "Redesigned legacy software that used wxPython and Python2 to instead use Python3 and PyQt6," +
            " making it much more performant and easier to read and maintain."
    }
    const fesInternEntry = {
        jobTitle: "Software Engineering Intern",
        company: "Frontier Electronic Systems",
        dates: "May 2022 - May 2023",
        skills: [
            {logo: PythonLogo, name: "Python"},
            {logo: QtLogo, name: "Qt/PyQt"},
        ],
        description: "Rebuilt legacy LabView in-house testing software with use Python3 and PyQt6 for compatability" +
            " and maintainability"
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