import React from 'react'

import {Box, AppBar, Toolbar, Typography} from '@mui/material';

const Navbar = () => {

    // This is a simple Navbar for UI purposes
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:"black", color:"white", height:"60px"}}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1, fontFamily: "Montserrat", fontSize:"24px" }}>
                        Jobs
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar