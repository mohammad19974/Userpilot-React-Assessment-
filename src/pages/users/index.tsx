import { Box, Typography } from '@mui/material';
import React, { Suspense, useEffect, useTransition } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PaperContainer } from '../../component/paper';
import Select from '../../component/select';
import { getUserFetch } from '../../features/users/usersSlice';
import { GENDER, NATIONALITIES } from '../../helper/constants';
import TableUser from './components/table';

const Users: React.FC = () => {
    const dispatch = useDispatch();
    const [ispending, startTransition] = useTransition();
    const [gender, setGender] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const [filterNationality, setFilterNationality] = useState<string | null>(
        null,
    );

    useEffect(() => {
        startTransition(() => {
            dispatch(getUserFetch(`?results=${rowsPerPage}`));
        });
    }, []);

    const onChangeFilterGender = useCallback(
        (event: unknown, value: string | null) => {
            setGender(() => {
                if (gender !== value) {
                    startTransition(() => {
                        dispatch(
                            getUserFetch(
                                `?gender=${value}${
                                    filterNationality
                                        ? '&nat=' + filterNationality
                                        : ''
                                }&results=${rowsPerPage}`,
                            ),
                        );
                    });
                }
                return value;
            });
        },
        [gender, filterNationality, rowsPerPage],
    );
    const onChangeFilterNationality = useCallback(
        (event: unknown, value: string | null) => {
            setFilterNationality(() => {
                if (value !== filterNationality) {
                    startTransition(() => {
                        dispatch(
                            getUserFetch(
                                `?nat=${value}${
                                    gender ? '&gender=' + gender : ''
                                }&results=${rowsPerPage}`,
                            ),
                        );
                    });
                }
                return value;
            });
        },
        [gender, rowsPerPage, filterNationality],
    );

    const onChangePageTable = useCallback(
        (value: number) => {
            startTransition(() => {
                dispatch(
                    getUserFetch(
                        `?results=${rowsPerPage}&page=${value}${
                            gender ? '&gender=' + gender : ''
                        }${
                            filterNationality ? '&nat=' + filterNationality : ''
                        }`,
                    ),
                );
            });
            setPage(value);
        },
        [gender, filterNationality, rowsPerPage, dispatch],
    );
    const onChangePerPage = useCallback(
        (value: number) => {
            startTransition(() => {
                dispatch(
                    getUserFetch(
                        `?results=${value}&page=${0}${
                            gender ? '&gender=' + gender : ''
                        }${
                            filterNationality ? '&nat=' + filterNationality : ''
                        }`,
                    ),
                );
            });
            setPage(0);
            setRowsPerPage(value);
        },
        [gender, filterNationality],
    );

    return (
        <Box>
            <PaperContainer>
                <Box
                    display={'flex'}
                    justifyContent="space-between"
                    ml="32px"
                    mr="19px"
                    mt="32px"
                    mb="16px"
                >
                    <Typography variant="h6" sx={typographySX}>
                        All users
                    </Typography>
                    <Box display="flex" gap="13px">
                        <Select
                            value={gender}
                            onChange={onChangeFilterGender}
                            options={GENDER}
                            label="Gender"
                        ></Select>
                        <Select
                            value={filterNationality}
                            onChange={onChangeFilterNationality}
                            options={NATIONALITIES}
                            label="Nationality"
                        ></Select>
                    </Box>
                </Box>
                <Suspense fallback={<>Loading Table</>}>
                    <TableUser
                        isLoading={ispending}
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={onChangePerPage}
                        page={page}
                        setPage={onChangePageTable}
                    ></TableUser>
                </Suspense>
            </PaperContainer>
            <Outlet></Outlet>
        </Box>
    );
};
export default Users;
const typographySX = {
    fontWeight: 700,
    fontSize: ' 19px',
    lineHeight: ' 24px',
    letterSpacing: ' 0.4px',
    color: ' #252733',
};
