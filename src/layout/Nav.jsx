import React from 'react';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export const Nav = () => {
    return (
        <Box
            className='navbar'
            sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '2.1vh',
                paddingTop: '1.5vh',
                backgroundColor: '#061324',
                display: 'flex',
                flexDirection: 'row',
                position: 'fixed',
                width: '100%',
                height: '2rem',
                zIndex: '100',
            }}
        >
            <Container>
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
                    sx={{}}
                >
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#home' className='navlink'>
                            home
                        </a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#about' className='navlink'>
                            who
                        </a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#projects' className='navlink'>
                            what
                        </a>
                    </li>
                    <li className='Nav' style={{ listStyleType: 'none' }}>
                        <a href='#contact' className='navlink'>
                            where
                        </a>
                    </li>
                </Stack>
            </Container>
        </Box>
    );
};

export default Nav;
