import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Mulish',
    },
    palette: {
        grey: {
            200: '#F7F8FC',
            400: '#A4A6B3',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    border: 'none',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {},
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&.MuiTableRow-hover:hover': {
                        background: '#3853ff0a',
                        cursor: 'pointer',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    [`& .MuiOutlinedInput-notchedOutline`]: {
                        border: '1px solid #DFE0EB',
                        borderRadius: '3px',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '1px solid #dfe0eb',
                },
            },
        },
    },
});
