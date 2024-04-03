import {Avatar, Chip, Stack} from "@mui/material";

interface DynamicChipsProps {
    skills: { logo: string, name: string }[]
}

export function DynamicChips(skills: DynamicChipsProps) {
    return (
        <Stack
            my={1}
            direction={"row"}
            display="flex"
            flexGrow={1}
            gap={2}
        >
            {
                skills.skills.map((skill) => {
                    return (
                        <Chip
                            avatar={<Avatar alt={skill.name} src={skill.logo}/>}
                            label={skill.name}
                            sx={{
                                color: "#ffffff",
                                fontWeight: "bolder",
                                background: "linear-gradient(to right, #0A39E8, #1595E8)"
                            }}
                        />
                    );
                })
            }
        </Stack>
    );
}