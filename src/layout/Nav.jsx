import React from 'react';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export const Nav = () => {
    return (
        <Box
            className='navbar'
            sx={{
                width: 'auto',
                minHeight: '5vh',
                backgroundColor: '#061324',
                display: 'flex',
                position: 'fixed',
                marginTop: '2rem',
                marginLeft: '94%',
            }}
        >
            <Box
                sx={{
                    paddingRight: '2rem',
                    color: '#6F2232',
                    fontSize: 20,
                    fontFamily: 'Source Code Pro',
                }}
            >
                <Stack
                    direction='column'
                    divider={
                        <Divider
                            orientation='horizontal'
                            flexItem
                            color='#4E4E50'
                        />
                    }
                    spacing={2}
                >
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#about'>About</a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#resume'>Resume</a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#contact'>Contact</a>
                    </li>
                </Stack>
            </Box>
        </Box>
    );
};

export default Nav;
