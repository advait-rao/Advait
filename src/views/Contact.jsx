import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const About = (props) => {
    return (
        <Box
            sx={{
                height: '95vh',
                backgroundColor: '#061324',
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'left',
                flexDirection: 'column',
            }}
            id='contact'
        >
            <Box
                sx={{
                    marginTop: '10vh',
                    fontSize: 64,
                    fontWeight: 'bold',
                    color: '#061324',
                    backgroundColor: '#950740',
                    borderRadius: 1,
                }}
            >
                Get in touch
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
                    backgroundColor: '#101B2B',
                    borderRadius: 1,
                }}
            >
                <Box sx={{ width: '50%' }}>Nice try, insurance salesman</Box>
            </Box>
        </Box>
    );
};

About.propTypes = {};

export default About;
