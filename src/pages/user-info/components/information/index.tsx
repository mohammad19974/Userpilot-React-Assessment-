import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
interface Props {
    shortLocation?: string;
    fullname: string;
}
export const Information: React.FC<Props> = ({ shortLocation, fullname }) => {
    return (
        <Box sx={typographyNameSX} mt={'90px'}>
            <Typography
                variant="inherit"
                sx={{
                    color: '#252733',
                    fontWeight: 700,
                    fontSize: '18px',
                    letterSpacing: '0.2px',
                }}
            >
                {fullname}
            </Typography>

            {shortLocation && (
                <Typography variant="subtitle2" sx={typographySortLocationSX}>
                    {shortLocation}
                </Typography>
            )}
        </Box>
    );
};
const typographyNameSX = { textAlign: 'center' };
const typographySortLocationSX = { color: '#87888C', letterSpacing: '0.1px' };
