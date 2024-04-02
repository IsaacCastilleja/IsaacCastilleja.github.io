import React from 'react';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Box} from "@mui/material";

const ResponsiveDivider = () => {
    const theme = useTheme();
    const isXsBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box justifyContent={"center"} alignItems={"center"} display={"flex"} flex={1} flexGrow={1}
             height={1} width={1}
        >
            <Divider
                orientation={isXsBreakpoint ? 'horizontal' : 'vertical'}
                flexItem
                sx={{
                    borderColor: "white",
                    borderWidth: "3px",
                    width: isXsBreakpoint ? '100%' : 'auto'
                }}
            />
        </Box>
    );
};

export default ResponsiveDivider;
