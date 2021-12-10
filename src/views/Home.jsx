import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const Home = (props) => {
    return (
        <Box
            sx={{
                height: '95vh',
                backgroundColor: '#1A1A1D',
            }}
        >
            <Box
                sx={{
                    color: '#C3073F',
                    fontSize: 150,
                    paddingLeft: '20%',
                    paddingTop: '20vh',
                    fontWeight: 'Bold',
                }}
            >
                Advait
            </Box>
            <Box
                sx={{
                    color: '#FFFFFF',
                    fontSize: 30,
                    paddingLeft: '20%',
                    fontStyle: 'oblique',
                    fontFamily: 'monospace',
                }}
            >
                Software Engineer
            </Box>
        </Box>
    );
};

Home.propTypes = {};

export default Home;
