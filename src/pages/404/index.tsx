import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { PaperContainer } from '../../component/paper';
const Error404: React.FC = () => {
    return (
        <PaperContainer>
            <Box m="4px">
                <Typography>Error 404</Typography>
            </Box>
        </PaperContainer>
    );
};
export default Error404;
