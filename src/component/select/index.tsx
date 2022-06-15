import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
interface Props {
    options: Array<string>;
    label?: string;
    onChange: (event: React.SyntheticEvent, value: string | null) => void;
    value: string | null;
}
const Select: React.FC<Props> = ({ options, label, onChange, value }) => {
    return (
        <Stack spacing={2} sx={{ width: 197.12 }}>
            <Autocomplete
                onChange={(event, value) => onChange(event, value)}
                size="small"
                value={value}
                id="select"
                getOptionLabel={(option) => option}
                options={options}
                renderInput={(params) => (
                    <TextField {...params} placeholder={label} />
                )}
            />
        </Stack>
    );
};

// eslint-disable-next-line react/display-name
export default React.memo(
    Select,
    (prevProps: Props, nextProps: Props) => prevProps.value === nextProps.value,
);
