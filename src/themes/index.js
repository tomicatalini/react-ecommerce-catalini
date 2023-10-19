import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary: {
            main:'#fb923c',
            contrastText: '#fff' 
        },
        secondary: {
            main: '#fff',
            contrastText: '#000'
        },
        dark: {
            main: '#d0d0d0d0',
            contrastText: '#fff' 
        }
    }
});