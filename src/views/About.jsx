import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import me from './meCropped.jpg';

const About = (props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#061324',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
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
                About me
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
                    backgroundColor: '#030C17',
                    borderRadius: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Avatar src={me} sx={{ width: '35vh', height: '35vh' }} />

                <Box
                    sx={{
                        width: 'auto',
                        color: '#FFFFFF',
                        fontWeight: 'medium',
                        fontFamily: 'monospace',
                        fontSize: '2vh',
                        margin: '2rem',
                    }}
                >
                    <p>
                        Hi! <br />
                        I'm Advait (Ad•vai•t).
                    </p>
                    <p>
                        I'm a Computer Science and IT Management student at the
                        University of Auckland.
                    </p>
                    <p>
                        When I'm not writing code, I like to write and record
                        songs, watch sports (cricket, formula1 and football) and
                        make sigma male meme references. <br /> I also like
                        going to the gym and making #gains.
                    </p>
                    <p>
                        Jokes apart, I want my time here to be spent creating
                        value and having a positive impact on the people I meet
                        (and even the people I don't). <br />
                        Everything I do is to further this ambition.
                    </p>
                </Box>
            </Box>
        </Box>
    );
};

About.propTypes = {};

export default About;
