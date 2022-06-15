import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import React from 'react';

import NavLinkBase from '../../component/nav-link';
import { NAVICATION_ITEM } from '../../helper/constants';

export const SideMenu: React.FC = () => {
    return (
        <Drawer variant="permanent" sx={drawerSX}>
            <Toolbar sx={toolBarSX}>
                <img src={process.env.PUBLIC_URL + '/logo-white.png'}></img>
            </Toolbar>
            <Box mb="64px"></Box>
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {NAVICATION_ITEM.map((data, index) => (
                        <ListItem
                            component={NavLinkBase}
                            to={data.path}
                            className={'active'}
                            key={index}
                            disablePadding
                        >
                            <Box className="active-box" sx={selectedSX}></Box>
                            <ListItemButton
                                sx={{ py: '12px' }}
                                className="menu-button"
                            >
                                <ListItemIcon>
                                    <img
                                        src={data.icon}
                                        alt={`icon-${data.title}`}
                                    ></img>
                                </ListItemIcon>
                                <ListItemText primary={data.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
const toolBarSX = {
    marginTop: '30px',
    marginLeft: '30px',
};
const drawerSX = {
    width: '255px',
    flexShrink: 0,

    [`& .MuiDrawer-paper`]: {
        width: '255px',
        background: '#363740',
        boxSizing: 'border-box',
    },
};

const selectedSX = {
    background: '#DDE2FF',
    position: 'absolute',
    width: '4px',
    height: '56px',
};
