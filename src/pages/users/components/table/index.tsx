import {
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { ItemUser } from '../../../../component/item-user';
import dayjs from 'dayjs';

import {
    ROW_PER_PAGE_OPTIONS,
    TABLE_USERS_HEADER,
} from '../../../../helper/constants';
import { Box } from '@mui/system';
interface Props {
    page: number;
    setPage: (value: number) => void;
    setRowsPerPage: (value: number) => void;
    rowsPerPage: number;
    isLoading: boolean;
}
const TableUser: React.FC<Props> = ({
    page,
    setPage,
    isLoading,
    setRowsPerPage,
    rowsPerPage,
}) => {
    const nav = useNavigate();
    const dataUser = useAppSelector((state) => state.users);
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
    };
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleNavInfo = (id: string) => {
        nav(id);
    };
    return (
        <TableContainer>
            {dataUser.isError == false ? (
                <Table sx={{ minWidth: 650 }} aria-label="table users">
                    <TableHead>
                        <TableRow>
                            {TABLE_USERS_HEADER.map((text, index) => (
                                <TableCell
                                    style={{
                                        paddingLeft: index === 0 ? '32px' : '',
                                    }}
                                    sx={tableCellHeaderSX}
                                    key={index}
                                >
                                    {text}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow
                            sx={{
                                display:
                                    isLoading || dataUser.isLoading
                                        ? ''
                                        : 'none',
                            }}
                        >
                            <TableCell
                                sx={{ padding: 0 }}
                                colSpan={6}
                                vertical-align="top"
                            >
                                <LinearProgress />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataUser &&
                            dataUser.users.results?.map((data, index) => {
                                return (
                                    <RowTable
                                        onClick={() =>
                                            handleNavInfo(data.login.uuid)
                                        }
                                        key={index}
                                        thumbnail={data.picture.thumbnail}
                                        name={`${data.name.first} ${data.name.last}`}
                                        fullLocation={`${data.location?.street?.number} ${data.location?.street?.name},${data?.location?.city}`}
                                        email={data.email}
                                        phone={data.cell}
                                        time={dayjs(
                                            data.registered.date,
                                        ).format('hh:mm A')}
                                        date={dayjs(
                                            data.registered.date,
                                        ).format('MMM DD, YYYY')}
                                        postcode={data.location.postcode.toString()}
                                        country={data.location.country}
                                    ></RowTable>
                                );
                            })}
                    </TableBody>
                </Table>
            ) : (
                <Box mx="30px">
                    <Typography>Error</Typography>
                </Box>
            )}
            <TablePagination
                rowsPerPageOptions={ROW_PER_PAGE_OPTIONS}
                component="div"
                count={-1}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

const RowTable = ({
    thumbnail,
    name,
    fullLocation,
    email,
    phone,
    date,
    time,
    postcode,
    country,
    onClick,
}: TypeRowProps) => {
    return (
        <TableRow onClick={onClick} hover sx={{ textDecoration: 'auto' }}>
            <TableCell sx={{ paddingInline: '32px' }}>
                <ItemUser
                    srcAvatar={thumbnail}
                    primaryText={name}
                    secondaryText={fullLocation}
                ></ItemUser>
            </TableCell>
            <TableCell>
                <ItemUser primaryText={email} secondaryText={phone}></ItemUser>
            </TableCell>
            <TableCell>
                <ItemUser primaryText={date} secondaryText={time}></ItemUser>
            </TableCell>

            <TableCell>
                <ItemUser
                    primaryText={country}
                    secondaryText={postcode}
                ></ItemUser>
            </TableCell>
        </TableRow>
    );
};

type TypeRowProps = {
    thumbnail: string;
    name: string;
    fullLocation: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    postcode: string;
    country: string;
    onClick: () => void;
};

const tableCellHeaderSX = {
    color: '#9FA2B4',
    letterSpacing: '0.2px',
    fontSize: '14px',
    fontWeight: 700,
};

export default React.memo(TableUser);
