import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from 'react-scroll-to-top';

const ArrowUp = () => {
    return (
        <>
            <ScrollToTop
                smooth={true}
                component={<KeyboardArrowUpIcon />}
                style={{ color: '#950740', backgroundColor: '#061324' }}
            />
        </>
    );
};

export default ArrowUp;
