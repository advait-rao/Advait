import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import profilePicture from '../media/profilePicture.jpg';

const AboutCard = (props) => {
    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: '2vh',
                display: 'inline-flex',
                backgroundColor: '#101B2B',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={0}>
                <Grid
                    container
                    xs
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    padding='1rem'
                >
                    <img className='av' src={profilePicture} alt='me' />
                </Grid>
                <Grid
                    container
                    xs
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    padding='1rem'
                >
                    <Paper
                        elevation={0}
                        sx={{
                            width: 'auto',
                            color: '#FFFFFF',
                            backgroundColor: 'inherit',
                            paddingRight: '1rem',
                        }}
                    >
                        <Typography
                            variant={'subtitle1'}
                            fontFamily={'JetBrains Mono'}
                        >
                            <p>
                                Kia ora! <br />
                                I'm Advait! It's pronounced{' '}
                                <b className='accent'>ād–vate</b>.
                            </p>
                            <p>
                                I'm a Computer Science and IT Management
                                graduate from the University of Auckland.
                            </p>
                            <p>
                                I'm proficient in{' '}
                                <b className='accent'>Python</b>, and have
                                worked with <b className='accent'>React</b> and{' '}
                                <b className='accent'>ASP .NET Core</b> when I
                                was interning at Xero in 2022. <br />
                                At the moment, I'm learning about{' '}
                                <b className='accent'>AI</b> and{' '}
                                <b className='accent'>Next.js</b>
                            </p>
                            <p>
                                I enjoy playing guitar, writing{' '}
                                <a
                                    href='https://soundcloud.com/advait_rao'
                                    className='link'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <b>songs</b>
                                </a>
                                , <s>losing at</s> Chess, as well as keeping up
                                with Cricket, F1 and Football. I like to think
                                I'm a humble person when I'm not playing Table
                                Tennis.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
};

AboutCard.propTypes = {};

export default AboutCard;
