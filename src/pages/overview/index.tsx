import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { PaperContainer } from '../../component/paper';
const Overview: React.FC = () => {
    return (
        <PaperContainer>
            <Box m="4px">
                <Typography>Overview</Typography>
            </Box>
        </PaperContainer>
    );
};
export default Overview;
