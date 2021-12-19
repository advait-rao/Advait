import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';

const ArrowDown = (props) => {
    return (
        <footer>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: props.mt,
                }}
            >
                <a href={props.link}>
                    <KeyboardArrowDown
                        className='bounce'
                        sx={{ fontSize: '12vh', color: '#950740' }}
                    />
                </a>
            </Box>
        </footer>
    );
};

ArrowDown.propTypes = {
    link: PropTypes.string,
    mt: PropTypes.string, //marginTop
};

export default ArrowDown;
