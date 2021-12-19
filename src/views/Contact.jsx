import { Container } from '@mui/material';
import { Box } from '@mui/system';
import HeaderPaper from '../components/HeaderPaper';

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
            <Container className='pageContainer'>
                <HeaderPaper header='Contact' />
                <Box
                    sx={{
                        marginTop: '2vh',
                        padding: '2rem',
                        display: 'flex',
                        fontSize: 24,
                        fontWeight: 'regular',
                        backgroundColor: '#101B2B',
                        borderRadius: 1,
                    }}
                >
                    Nice try, insurance salesman
                </Box>
            </Container>
        </Box>
    );
};

About.propTypes = {};

export default About;
