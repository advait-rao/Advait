import { Box } from '@mui/system';
import { Container } from '@mui/material';
import ArrowDown from '../components/ArrowDown';
import HeaderPaper from '../components/HeaderPaper';

const Resume = (props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            id='resume'
        >
            <Container className='pageContainer'>
                <HeaderPaper header='Resume' />
                <Box
                    sx={{
                        marginTop: '2vh',
                        padding: '2rem',
                        display: 'flex',
                        fontSize: 24,
                        height: 'auto',
                        fontWeight: 'regular',
                        backgroundColor: '#101B2B',
                        borderRadius: 2,
                    }}
                >
                    Resume go brr...
                </Box>
            </Container>
            <ArrowDown link='#contact' />
        </Box>
    );
};

Resume.propTypes = {};

export default Resume;
