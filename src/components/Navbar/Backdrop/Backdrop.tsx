import { Box } from "@mui/material";

export default function Backdrop() {
    return (
        <Box className="backdropStyle"
            sx={(theme) => ({
            [theme.breakpoints.between('xs','md')]: {
                position:"fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#6E6E73",
                display: "flex",
                zIndex: 2,
                visibility: "visible",
                opacity: "0.8"
            },
                visibility: "hidden",
                position: "absolute",
                display:"none",
            })}
        ></Box>        
    );
}