import { Box, height } from '@mui/system';
import PropTypes from 'prop-types';

const About = (props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#6F2232',
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'left',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    marginTop: '10vh',
                    fontSize: 64,
                    fontWeight: 'bold',
                    color: '#6F2232',
                    backgroundColor: '#1A1A1D',
                }}
            >
                About me
            </Box>
            <Box
                sx={{
                    marginTop: '2vh',
                    padding: '2rem',
                    display: 'flex',
                    fontSize: 24,
                    height: '60%',
                    fontWeight: 'regular',
                    width: '50%',
                    backgroundColor: '#4E4E50',
                    borderRadius: 1,
                }}
            >
                <Box sx={{ width: '50%' }}>left text</Box>
                <Box sx={{ width: '50%' }}>right text</Box>
            </Box>
        </Box>
    );
};

About.propTypes = {};

export default About;
