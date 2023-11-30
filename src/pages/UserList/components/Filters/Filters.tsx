import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { UserListFilterType } from 'src/services/customers/types.ts'

type Props = {
    filters: UserListFilterType,
    setFilters: (filters: UserListFilterType) => void
}

function Filters({filters, setFilters}: Props) {
    return (
        <Box sx={{bgcolor: 'info.dark', borderRadius: '16px', padding: '24px', margin: '0 0 24px', display: 'flex', gap: '12px'}}>
            <TextField
                sx={{ flex: '1' }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                onChange={(e) => {
                    setFilters({...filters, lastName: e.target.value})
                }}
            />
            <TextField
                sx={{ flex: '1' }}
                id="outlined-basic"
                label="Country"
                variant="outlined"
                onChange={(e) => {
                    setFilters({...filters, country: e.target.value})
                }}
            />
            <FormControl sx={{ flex: '1' }}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                    labelId="gender-select-label"
                    id="gender-select"
                    value={filters.gender}
                    label="Gender"
                    onChange={(e) => {
                        setFilters({...filters, gender: e.target.value})
                    }}
                >
                    <MenuItem value={''}>All</MenuItem>

                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                    <MenuItem value={'fluid'}>Fluid</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Filters