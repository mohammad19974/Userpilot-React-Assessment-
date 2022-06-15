import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

interface Props {
    srcImage?: string;
}
export const Header: React.FC<Props> = ({ srcImage }) => {
    return (
        <Box sx={{ background: '#2050AD', height: '158px' }}>
            <Avatar
                sx={{
                    position: 'absolute',
                    top: '92px',
                    right: '206px',
                    width: '132px',
                    height: '132px',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));',
                }}
                src={
                    srcImage ?? 'https://randomuser.me/api/portraits/men/28.jpg'
                }
            ></Avatar>
        </Box>
    );
};
