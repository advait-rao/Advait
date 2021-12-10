import { Box } from '@mui/system';
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
                backgroundColor: '#1A1A1D',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    color: '#C3073F',
                    fontSize: '13vh',
                    paddingLeft: '17vw',
                    paddingTop: '20vh',
                    fontWeight: 'Bold',
                }}
            >
                Advait
            </Box>
            <Box
                sx={{
                    color: '#FFFFFF',
                    fontSize: '3vh',
                    paddingLeft: '17vw',
                    fontStyle: 'oblique',
                    fontFamily: 'monospace',
                }}
            >
                Software Engineer_
            </Box>
            <Box
                display={'flex'}
                flexDirection={'row'}
                color={'#950740'}
                paddingLeft={'17vw'}
                paddingTop={'2rem'}
            >
                <GitHubIcon
                    fontSize='large'
                    sx={{
                        marginRight: '4%',
                    }}
                />
                <LinkedInIcon
                    fontSize='large'
                    sx={{
                        marginRight: '4%',
                    }}
                />
                <EmailRoundedIcon
                    fontSize='large'
                    sx={{
                        marginRight: '4%',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyItems: 'center',
                    marginTop: '30vh',
                }}
            >
                <KeyboardArrowDownIcon
                    sx={{ fontSize: 128, color: '#950740' }}
                />
            </Box>
        </Box>
    );
};

Home.propTypes = {};

export default Home;
