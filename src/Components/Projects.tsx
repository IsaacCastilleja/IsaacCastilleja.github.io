import {Stack, Box} from "@mui/material";
import "../css/sections.css";
import Typography from "@mui/material/Typography";
import Python from "../assets/python-logo-only.png";
import Bootstrap from "../assets/Bootstrap.png";
import Electron from "../assets/Electron.png";
import Docker from "../assets/docker.svg";
import JavaScript from "../assets/JavaScript.png";
import Spotify from "../assets/spotify.png";
import Tauri from "../assets/tauri.png";
import Vue from "../assets/Vue.png";
import Typescript from "../assets/Typescript.png";
import sqlite from "../assets/sqlite.png";
import fastapi from "../assets/fastapi.png";
import Rust from "../assets/rust.jpg";
import ROS from "../assets/ROS.png";
import ReactLogo from "../assets/react.png";
import MaterialUILogo from "../assets/material-ui.svg";
import igvcGUI from "../assets/demos/igvcGUI.gif";
import wordsearch from "../assets/demos/wordsearch_demo.gif";
import muse from "../assets/demos/museDemo.mp4";
import museAlt from "../assets/demos/museDemoApple.mp4";
import portfolio from "../assets/demos/portfolioWebsite.png";
import weighdlePreview from "../assets/demos/weighdleDemo.gif";
import {ProjectEntry} from "./ProjectEntry";

export function Projects() {
    const weighdle = {
        name: "Weighdle.com",
        dates: "June 2025",
        description: "Daily browser game where users guess the weight of the displayed item",
        demo: weighdlePreview,
        demoAlt: "Preview image for https://weighdle.com",
        demoType: "image",
        link: "https://weighdle.com",
        skills: [
            {logo: ReactLogo, name: "React"},
            {logo: Typescript, name: "TypeScript"},
            {logo: Python, name: "Python"},
            {logo: fastapi, name: "FastAPI"},
            {logo: sqlite, name: "SQLite"},
            {logo: Docker, name: "Docker"},
        ]

    }
    const dashboard = {
        name: "Custom Dashboard GUI for Autonomous Vehicle",
        dates: "Jan 2023 - June 2023",
        description: "GUI for the dashboard of an autonomous vehicle for the Intelligent Ground Vehicle Competition",
        demo: igvcGUI,
        demoAlt: "GIF demonstration of GUI",
        demoType: "image",
        link: undefined,
        skills: [
            {logo: JavaScript, name: "JavaScript"},
            {logo: Electron, name: "Electron"},
            {logo: Bootstrap, name: "Bootstrap"},
            {logo: ROS, name: "ROS"},
        ],
    }
    const website = {
        name: "Portfolio Website",
        dates: "Apr 2023 - Present",
        description: "Custom website to showcase my projects and experience",
        demo: portfolio,
        demoAlt: "",
        demoType: "image",
        link: undefined,
        skills: [
            {logo: Typescript, name: "TypeScript"},
            {logo: ReactLogo, name: "React"},
            {logo: MaterialUILogo, name: "MaterialUI"},
        ],
    }
    const songGuesser = {
        name: "Song Guessing Application",
        dates: "Dec 2023 - Mar 2024",
        demo: muse,
        demoAlt: museAlt,
        description: "Guess the song game that utilizes the Spotify API to let users use their own playlists",
        demoType: "video",
        link: undefined,
        skills: [
            {logo: Rust, name: "Rust"},
            {logo: Vue, name: "Vue"},
            {logo: Bootstrap, name: "Bootstrap"},
            {logo: Tauri, name: "Tauri"},
            {logo: Spotify, name: "Spotify API"}
        ],
    }
    const wordSearch = {
        name: "Word Search Solver",
        dates: "September 2023",
        description: "Word search solving visualized with animations",
        demo: wordsearch,
        demoAlt: "",
        demoType: "image",
        link: undefined,
        skills: [
            {logo: Rust, name: "Rust"},
            {logo: Vue, name: "Vue"},
            {logo: Tauri, name: "Tauri"}
        ],
    }
    return (
        <Box id={"Projects"}>
            <Typography variant={"h3"} className={"section-header"} paddingY={"1rem"}>Projects</Typography>
            <Stack direction={"column"} rowGap={2}>
                <ProjectEntry props={weighdle}></ProjectEntry>
                <ProjectEntry props={dashboard}></ProjectEntry>
                <ProjectEntry props={website}></ProjectEntry>
                <ProjectEntry props={songGuesser}></ProjectEntry>
                <ProjectEntry props={wordSearch}></ProjectEntry>
            </Stack>
        </Box>

    );
}

export default Projects;