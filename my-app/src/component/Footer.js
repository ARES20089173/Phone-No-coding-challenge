import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
function MainContent() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#64766A',
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
                    <Typography textAlign='center' variant='h6' >
                        @Author:Cheung Ka Kit 2022/5/3</Typography>

                </Grid>
            </Grid>
        </Box>
    )
}
export default MainContent