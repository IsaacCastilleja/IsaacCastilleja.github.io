import {Divider, Stack, Box} from "@mui/material";
import "../css/sections.css";
import Typography from "@mui/material/Typography";
import QtLogo from "../assets/Qt_logo.png";
import PythonLogo from "../assets/python-logo-only.png";
import igvcGUI from "../assets/demos/igvcGUI.gif";
import wordsearch from "../assets/demos/wordsearch_demo.gif";
import muse from "../assets/demos/museDemo.ogv";
import {ProjectEntry} from "./ProjectEntry";

export function Projects() {
    const dashboard = {
        name: "Custom Dashboard for Autonomous Vehicle",
        dates: "June 2023 - Present",
        description: "GUI for the dashboard of an autonomous vehicle for the Intelligent Ground Vehicle Competition",
        demo: `${igvcGUI}`,
        demoType: "image",
        skills: [
            {logo: "J", name: "JavaScript"},
            {logo: "E", name: "Electron"},
            {logo: "B", name: "Bootstrap"},
            {logo: "R", name: "ROS"},
        ],
    }
    const songGuesser = {
        name: "Song Guessing Application",
        dates: "Dec 2023 - Mar 2024",
        demo: `${muse}`,
        description: "Guess the song game that utilizes the Spotify API to let users use their own playlists",
        demoType: "video",
        skills: [
            {logo: "R", name: "Rust"},
            {logo: "V", name: "Vue"},
            {logo: "B", name: "Bootstrap"},
            {logo: "T", name: "Tauri"},
            {logo: "S", name: "Spotify API"}
        ],
    }
    const wordSearch = {
        name: "Word Search Solver",
        dates: "September 2023",
        description: "Word search solving visualized with animations",
        demo: `${wordsearch}`,
        demoType: "image",
        skills: [
            {logo: "R", name: "Rust"},
            {logo: "V", name: "Vue"},
            {logo: "T", name: "Tauri"}
        ],
    }
    const courseFinder = {
        name: "College Course Finder",
        dates: "May 2021",
        description: "Web scraper to find and filter courses based on user-selected criteria of course attributes, " +
            "level, and prerequisites to make degree planning easier",
        demo: "",
        demoType: "image",
        skills: [
            {logo: PythonLogo, name: "Python"},
            {logo: QtLogo, name: "Qt/PyQt"},
        ],
    }
    return (
        <Box id={"Projects"}>
            <Typography variant={"h3"} className={"section-header"} paddingY={"1rem"}>Projects</Typography>
            <Divider></Divider>
            <Stack direction={"column"} rowGap={2}>
                <ProjectEntry props={dashboard}></ProjectEntry>
                <ProjectEntry props={songGuesser}></ProjectEntry>
                <ProjectEntry props={wordSearch}></ProjectEntry>
                <ProjectEntry props={courseFinder}></ProjectEntry>
            </Stack>
        </Box>

    );
}

export default Projects;