import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SideMenu } from '../side-menu';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../top-nav';
import { Theme } from '@mui/material';

function DashboardContent() {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu></SideMenu>
            <Box component="main" sx={boxMainSX}>
                <Box sx={boxSubMainSX}>
                    <TopBar></TopBar>

                    <Grid sx={{ mt: 8.7 }}>
                        <Outlet></Outlet>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default DashboardContent;
const boxSubMainSX = {
    mt: 3.8,
    mb: 4,
    ml: (theme: Theme) => theme.typography.pxToRem(30),
    mr: (theme: Theme) => theme.spacing(4),
};
const boxMainSX = {
    backgroundColor: (theme: Theme) => theme.palette.grey[200],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
};
