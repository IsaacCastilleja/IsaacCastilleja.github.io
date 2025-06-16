import Box from "@mui/material/Box";
import "../css/sections.css";
import Typography from "@mui/material/Typography";

export function AboutMe() {

    return (
        <Box id={"AboutMe"}>
            <Typography variant={"h3"}>About Me</Typography>
            <Typography variant={"body1"} fontFamily={"EB Garamond"} fontSize={"1.25rem"}>
                I developed my first real user interface during my senior design project in university.
                When I started, I had coding experience but none at all with JavaScript or front-end development.
                Then I was given the task to create a touchscreen GUI for the dashboard of an autonomous vehicle
                completely from scratch, in just a single semester. Once I figured out what I was doing, I was hooked.
                Since then I've made multiple personal projects, including a daily browser game and a song guessing game.
                Each new project just leads to more excitement on what I could work on next.
                <br/>
                <br/>
                In my free time, I’m often found working on various projects alone or with my friends. These days,
                I'm venturing into game development with one of them and exploring embedded software with another.
                I just like to code.
            </Typography>
        </Box>

    );
}

export default AboutMe;