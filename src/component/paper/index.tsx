import { Paper } from '@mui/material';
import React, { ReactNode } from 'react';
interface PaperPageProps {
    children?: ReactNode;
}
export const PaperContainer: React.FC<PaperPageProps> = ({ children }) => {
    return <Paper variant="outlined">{children}</Paper>;
};
