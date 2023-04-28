import React from 'react';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export const Nav = () => {
    return (
        <Box
            className='navbar'
            sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '2.1vh',
                paddingTop: '1.5vh',
                paddingBottom: '2vh',
                backgroundColor: '#061324',
                display: 'flex',
                flexDirection: 'row',
                position: 'fixed',
                width: '100%',
                zIndex: '100',
            }}
        >
            <Stack
                direction='row'
                divider={
                    <Divider orientation='vertical' flexItem color='#4E4E50' />
                }
                spacing={2}
                sx={{}}
            >
                <li className='Nav' style={{ listStyleType: 'none' }}>
                    <a href='#home' className='navlink'>
                        Home
                    </a>
                </li>
                <li className='Nav' style={{ listStyleType: 'none' }}>
                    <a href='#about' className='navlink'>
                        About
                    </a>
                </li>
                <li className='Nav' style={{ listStyleType: 'none' }}>
                    <a href='#projects' className='navlink'>
                        Projects
                    </a>
                </li>
                <li className='Nav' style={{ listStyleType: 'none' }}>
                    <a href='#contact' className='navlink'>
                        Contact
                    </a>
                </li>
            </Stack>
        </Box>
    );
};

export default Nav;
