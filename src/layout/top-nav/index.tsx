import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
export const TopBar: React.FC = () => {
    const location = useLocation();
    return (
        <AppBar color="transparent" position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
                <Typography variant="h6" sx={pageNameSX}>
                    {location.pathname.split('/')[2]}
                </Typography>
                <Box>
                    <Typography variant="overline" sx={fullNameSX}>
                        Jones Ferdinand
                    </Typography>

                    <IconButton sx={{ p: 0 }}>
                        <Avatar
                            alt="Jones Ferdinand"
                            src="/static/images/avatar/2.jpg"
                        />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
const fullNameSX = {
    mx: '14px',
    textTransform: 'capitalize',
    fontSize: '14px',
    color: '#252733',
    fontWeight: 600,
};

const pageNameSX = {
    fontSize: '24px',
    color: '#252733',
    fontWeight: 700,
    textTransform: 'capitalize',
};
