import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import ArrowDown from '../components/ArrowDown';

const Projects = (props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#061324',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            id='projects'
        >
            <Box
                sx={{
                    marginTop: '5vh',
                    fontSize: 64,
                    fontWeight: 'bold',
                    color: '#061324',
                    backgroundColor: '#950740',
                    borderRadius: 1,
                    justifyContent: 'Center',
                }}
            >
                Stuff I've Made
            </Box>
            <Box
                sx={{
                    marginTop: '2vh',
                    padding: '2rem',
                    display: 'flex',
                    fontSize: 24,
                    height: 'auto',
                    fontWeight: 'regular',
                    width: '50%',
                    backgroundColor: '#101B2B',
                    borderRadius: 2,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                Projects go here
            </Box>
            <ArrowDown link='#resume' />
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
