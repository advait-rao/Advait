import React from 'react';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const Nav = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '5vh',
                backgroundColor: '#030C17',
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    paddingRight: '2rem',
                    color: '#6F2232',
                    fontSize: 20,
                    fontFamily: 'monospace',
                }}
            >
                <Stack
                    direction='row'
                    divider={
                        <Divider
                            orientation='vertical'
                            flexItem
                            color='#4E4E50'
                        />
                    }
                    spacing={2}
                >
                    <li style={{ listStyleType: 'none' }}>Home</li>
                    <li style={{ listStyleType: 'none' }}>About</li>
                    <li style={{ listStyleType: 'none' }}>Contact</li>
                </Stack>
            </Box>
        </Box>
    );
};

export default Nav;
