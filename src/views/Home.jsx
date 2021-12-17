import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PropTypes from 'prop-types';
import ArrowDown from '../components/ArrowDown';

const Home = (props) => {
    return (
        <Box
            sx={{
                height: '95vh',
                backgroundColor: '#061324',
                flexDirection: 'column',
            }}
            id='home'
        >
            <Box
                sx={{
                    color: '#950740',
                    fontSize: '13vh',
                    paddingLeft: '17vw',
                    paddingTop: '20vh',
                    fontWeight: 'Bold',
                }}
            >
                Advait Rao
            </Box>
            <Box
                sx={{
                    color: '#FFFFFF',
                    fontSize: '3vh',
                    paddingLeft: '17vw',
                    paddingTop: '1rem',
                    fontFamily: 'Source Code Pro',
                }}
            >
                Software Engineer<i className='blink'>_</i>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'row'}
                color={'#4E4E50'}
                paddingLeft={'17vw'}
                paddingTop={'2rem'}
            >
                <a
                    href='https://github.com/advait-rao'
                    target='_blank'
                    rel='noreferrer'
                    style={{ color: '#4E4E50' }}
                >
                    <GitHubIcon
                        className='icon'
                        fontSize='large'
                        sx={{
                            marginRight: '4rem',
                        }}
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/advaitrao/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ color: '#4E4E50' }}
                >
                    <LinkedInIcon
                        className='icon'
                        fontSize='large'
                        sx={{
                            marginRight: '4rem',
                        }}
                    />
                </a>

                <EmailRoundedIcon
                    className='icon'
                    fontSize='large'
                    sx={{
                        marginRight: '4rem',
                    }}
                />
            </Box>
            <ArrowDown link='#about' mt='20vh' />
        </Box>
    );
};

Home.propTypes = {};

export default Home;
