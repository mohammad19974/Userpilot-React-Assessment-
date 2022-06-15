import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Header } from './components/header';
import { Information } from './components/information';
const UserInfo: React.FC = () => {
    const { id } = useParams();
    const userInfo = useAppSelector((state) =>
        state.users.users?.results.find((data) => data.login.uuid === id),
    );
    const nav = useNavigate();
    useEffect(() => {
        if (userInfo === undefined) {
            nav('/dsahboard/users');
        }
    }, [userInfo]);
    return (
        <Drawer
            anchor={'right'}
            open={true}
            BackdropProps={{
                sx: { opacity: '0 !important' },
            }}
            sx={drawerSX}
            onClose={() => nav('/dsahboard/users')}
        >
            <Suspense fallback={<>Loading</>}>
                <Box sx={{ width: 545 }}>
                    <Header srcImage={userInfo?.picture.large}></Header>
                    <Information
                        fullname={`${userInfo?.name.first}  ${userInfo?.name?.last}`}
                        shortLocation={`${userInfo?.location?.street?.number} 
                      
                        ${userInfo?.location?.street?.name}
                  
                        ${userInfo?.location?.city}`}
                    ></Information>
                </Box>
            </Suspense>
        </Drawer>
    );
};
export default UserInfo;
const drawerSX = {
    boxShadow: ' 0px 4px 10px rgba(0, 0, 0, 0.15)',
};
