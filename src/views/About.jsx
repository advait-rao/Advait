import { Box } from '@mui/system';
import { Container } from '@mui/material';
import HeaderPaper from '../components/HeaderPaper';
import AboutCard from '../components/AboutCard';

const About = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
            id='about'
        >
            <Container className='pageContainer'>
                <HeaderPaper header='About' />
                <AboutCard />
            </Container>
        </Box>
    );
};

About.propTypes = {};

export default About;
