import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SideMenu } from '../side-menu';
import { Outlet } from 'react-router-dom';
import { TopBar } from '../top-nav';

function DashboardContent() {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu></SideMenu>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.grey[200],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Box sx={{ mt: 3.8, mb: 4, ml: '30px', mr: '32px' }}>
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
