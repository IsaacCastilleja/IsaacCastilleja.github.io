import Box from "@mui/material/Box";
import "../css/sections.css";
import Typography from "@mui/material/Typography";

export function AboutMe() {

    return (
        <Box id={"AboutMe"}>
            <Typography variant={"h3"}>About Me</Typography>
            <Typography variant={"body1"} fontFamily={"EB Garamond"} fontSize={"1.25rem"}>
                A friend once told me that once you agree to making a GUI, you become the "GUI guy."
                He was right. After, developing my first real user interface-- A touchscreen display for our
                autonomous vehicle senior design project-- I was hooked. There's nothing quite like typing
                away in an IDE, having a button appear in your browser, clicking it, and then seeing your
                code executed in reply. I just like coding.
                <br/>
                <br/>
                In my free time, I’m often found working on various projects with my friends or playing
                video games with them. These days, I'm venturing into game development with one of them
                and exploring embedded software with another. It’s about the joy of creating and solving
                problems together, more than anything else.
            </Typography>
        </Box>

    );
}

export default AboutMe;