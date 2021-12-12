import { Box, color } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PropTypes from 'prop-types';

const Home = (props) => {
    return (
        <Box
            sx={{
                height: '95vh',
                backgroundColor: '#061324',
                flexDirection: 'column',
            }}
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
                    fontStyle: 'oblique',
                    fontFamily: 'monospace',
                }}
            >
                Software Engineer_
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
                        fontSize='large'
                        sx={{
                            marginRight: '4rem',
                        }}
                    />
                </a>

                <EmailRoundedIcon
                    fontSize='large'
                    sx={{
                        marginRight: '4rem',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20vh',
                }}
            >
                <KeyboardArrowDownIcon
                    className='bounce'
                    sx={{ fontSize: '15vh', color: '#950740' }}
                />
            </Box>
        </Box>
    );
};

Home.propTypes = {};

export default Home;
