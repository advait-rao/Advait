import React from 'react';
import { Box } from '@mui/system';

export const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '5vh',
                backgroundColor: '#4E4E50',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            © Advait Rao 2022
        </Box>
    );
};

export default Footer;
