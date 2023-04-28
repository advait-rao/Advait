import { Box } from '@mui/system';
import { Container, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowDown from '../components/ArrowDown';
import Nav from '../layout/Nav';

const Home = (props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#061324',
                flexDirection: 'column',
            }}
            id='home'
        >
            <Container className='pageContainer'>
                <Nav />
                <Box
                    sx={{
                        color: '#950740',
                        fontSize: '12vh',
                        paddingTop: '20vh',
                        fontWeight: 'bold',
                    }}
                >
                    Advait Rao
                </Box>
                <Box
                    sx={{
                        color: '#FFFFFF',
                        fontSize: '3vh',
                        paddingTop: '1rem',
                        fontFamily: 'JetBrains Mono',
                        fontWeight: 'bold',
                    }}
                >
                    Software Engineer<i className='blink'>_</i>
                </Box>
                <Box display={'flex'} flexDirection={'row'} paddingTop={'2rem'}>
                    <IconButton
                        href='https://github.com/advait-rao'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <GitHubIcon
                            className='icon'
                            fontSize='large'
                            sx={{
                                marginRight: '4rem',
                            }}
                        />
                    </IconButton>

                    <IconButton
                        href='https://www.linkedin.com/in/advaitrao/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <LinkedInIcon
                            className='icon'
                            fontSize='large'
                            sx={{
                                marginRight: '4rem',
                            }}
                        />
                    </IconButton>
                    <IconButton href='#contact'>
                        <EmailRoundedIcon
                            className='icon'
                            fontSize='large'
                            sx={{
                                marginRight: '4rem',
                            }}
                        />
                    </IconButton>
                </Box>
                <ArrowDown link='#about' mt='20vh' />
            </Container>
        </Box>
    );
};

Home.propTypes = {};

export default Home;
