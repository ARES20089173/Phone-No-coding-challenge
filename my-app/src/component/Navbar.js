import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function Navbar() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: ' #C0A9BD ',
                height: '10vh',
                width: '100%',

            }}
        >
            <Grid
                container
                direction="row"
                height='10vh'
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12}  >
                    <Typography textAlign='center' variant='h6' > Phone No Coding Challenge</Typography>

                </Grid>
            </Grid>
        </Box>
    );
}
