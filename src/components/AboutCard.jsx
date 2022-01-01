import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import me from '../media/meCropped.jpg';

const AboutCard = (props) => {
    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: '2vh',
                display: 'inline-flex',
                backgroundColor: '#101B2B',
                alignItems: 'center',
                maxHeight: '163vh',
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
                    <img className='av' src={me} alt='me' />
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
                            fontFamily={'Source Code Pro'}
                        >
                            <p>
                                Kia ora! <br />
                                I'm Advait (Ad•vāi•t).
                            </p>
                            <p>
                                I'm a Computer Science and IT Management student
                                at the University of Auckland.
                            </p>
                            <p>
                                I'm proficient in{' '}
                                <b className='accent'>Python</b> as I've used it
                                for a few of my projects and I'm currently
                                learning <b className='accent'>React</b> and{' '}
                                <b className='accent'>C#</b> at Xero, where I'm
                                an Intern Software Engineer. I'm also
                                comfortable writing unit tests, and am learning
                                about <b className='accent'>Mocking</b>,{' '}
                                <b className='accent'>Autofixure</b> and{' '}
                                <b className='accent'>React Testing Library</b>.
                            </p>
                            <p>
                                I like to write and record songs, watch sports
                                (cricket, formula1 and football) and make sigma
                                male meme references. <br /> I also like going
                                to the gym and making #gains.
                            </p>
                            <p>
                                Jokes apart, I want my time here to be spent
                                creating value and having a positive impact on
                                the people I meet (and even the people I don't).{' '}
                                <br />
                                Everything I do is to further this ambition.
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
