import React from 'react';
import {
    Container,
    Divider,
    IconButton,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/system';
import HeaderPaper from '../components/HeaderPaper';

const About = (props) => {
    return (
        <Box
            sx={{
                minHeight: '80vh',
                backgroundColor: '#061324',
                display: 'flex',
                flexDirection: 'column',
            }}
            id='contact'
        >
            <Container className='pageContainer'>
                <HeaderPaper header='Contact' />
                <Paper
                    elevation={2}
                    sx={{
                        marginTop: '2vh',
                        padding: '1rem',
                        display: 'flex',
                        backgroundColor: '#101B2B',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant='h6'
                        component='div'
                        color='#FFFFFF'
                        fontFamily={'Source Code Pro'}
                        fontWeight={'bold'}
                        width={'100%'}
                    >
                        <Stack
                            spacing={2}
                            divider={
                                <Divider
                                    orientation='horizontal'
                                    flexItem
                                    color='#4E4E50'
                                />
                            }
                        >
                            <Box display={'inline-flex'} className='cr'>
                                <IconButton
                                    href='mailto:advaitr28@gmail.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    sx={{ marginRight: '1rem' }}
                                >
                                    <EmailRoundedIcon
                                        fontSize='large'
                                        className='icon'
                                    />
                                </IconButton>
                                <p>
                                    Send me an{' '}
                                    <a
                                        href='mailto:advaitr28@gmail.com?subject=Getting%20in%20touch&body=Kia%20ora!%0D%0A%0D%0AI%20decided%20to%20contact%20you%20after%20going%20through%20your%20website.'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='navlink accent'
                                    >
                                        email
                                    </a>
                                </p>
                            </Box>
                            <Box display={'inline-flex'} className='cr'>
                                <IconButton
                                    href='https://www.linkedin.com/in/advaitrao/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    sx={{ marginRight: '1rem' }}
                                >
                                    <LinkedInIcon
                                        fontSize='large'
                                        className='icon'
                                    />
                                </IconButton>
                                <p>
                                    Connect with me on{' '}
                                    <a
                                        href='https://www.linkedin.com/in/advaitrao/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='navlink'
                                    >
                                        LinkedIn
                                    </a>
                                </p>
                            </Box>
                            <Box display={'inline-flex'} className='cr'>
                                <IconButton
                                    href='https://github.com/advait-rao'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    sx={{ marginRight: '1rem' }}
                                >
                                    <GitHubIcon
                                        fontSize='large'
                                        className='icon'
                                    />
                                </IconButton>
                                <p>
                                    Checkout my{' '}
                                    <a
                                        href='https://github.com/advait-rao'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='navlink'
                                    >
                                        GitHub
                                    </a>
                                </p>
                            </Box>
                            <Box display={'inline-flex'} className='cr'>
                                <IconButton sx={{ marginRight: '1rem' }}>
                                    <AttachMoneyIcon
                                        fontSize='large'
                                        className='icon'
                                    />
                                </IconButton>
                                <p>
                                    Give me{' '}
                                    <a href='/' className='navlink'>
                                        #CashMoney
                                    </a>
                                </p>
                            </Box>
                        </Stack>
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
};

About.propTypes = {};

export default About;
