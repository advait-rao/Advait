import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const About = (props) => {
    return (
        <Box
            sx={{
                height: '95vh',
                backgroundColor: '#6F2232',
            }}
        >
            This is the About Page.
        </Box>
    );
};

About.propTypes = {};

export default About;
