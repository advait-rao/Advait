import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const HeaderPaper = (props) => {
    return (
        <Paper
            elevation={6}
            sx={{
                marginTop: '5vh',
                fontSize: 64,
                fontWeight: 'bold',
                color: '#061324',
                backgroundColor: '#950740',
                paddingLeft: '2rem',
            }}
        >
            {props.header}
        </Paper>
    );
};

HeaderPaper.propTypes = {
    header: PropTypes.string,
};

export default HeaderPaper;
