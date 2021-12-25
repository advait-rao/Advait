import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';

const HeaderPaper = (props) => {
    return (
        <Paper
            className='hr'
            elevation={6}
            sx={{
                marginTop: '8vh',
                color: '#061324',
                backgroundColor: '#950740',
                paddingLeft: '1rem',
            }}
        >
            <Typography variant='h2' fontFamily='Sora' fontWeight={'bold'}>
                {props.header}
            </Typography>
        </Paper>
    );
};

HeaderPaper.propTypes = {
    header: PropTypes.string,
};

export default HeaderPaper;
