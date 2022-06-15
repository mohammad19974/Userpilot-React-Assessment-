import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
interface ItemUserProps {
    srcAvatar?: string | undefined;
    primaryText: string;
    secondaryText?: string;
}

export const ItemUser: React.FC<ItemUserProps> = ({
    srcAvatar,
    primaryText,
    secondaryText,
}) => {
    return (
        <ListItem sx={listItemSX}>
            {srcAvatar && (
                <ListItemAvatar>
                    <Avatar src={srcAvatar}></Avatar>
                </ListItemAvatar>
            )}
            <ListItemText
                sx={listItemTextSX}
                primary={primaryText}
                secondary={secondaryText}
            />
        </ListItem>
    );
};
const listItemSX = {
    padding: 0,
};
const listItemTextSX = {
    [`& .MuiListItemText-primary`]: {
        color: '#252733',
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '0.2px',
        lineHeight: '20px',
    },
    [`& .MuiListItemText-secondary`]: {
        color: '#252733',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.1px',
    },
};
