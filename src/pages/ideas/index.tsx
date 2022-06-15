import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { PaperContainer } from '../../component/paper';
const Ideas: React.FC = () => {
    return (
        <PaperContainer>
            <Box m="4px">
                <Typography>Ideas</Typography>
            </Box>
        </PaperContainer>
    );
};
export default Ideas;
