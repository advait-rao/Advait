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
                                I'm Advait! [ad•vāi•t]
                            </p>
                            <p>
                                I'm a Computer Science and IT Management student
                                at the University of Auckland.
                            </p>
                            <p>
                                I'm proficient in{' '}
                                <b className='accent'>Python</b>, and have
                                experience working with{' '}
                                <b className='accent'>React</b> and{' '}
                                <b className='accent'>C#</b> at Xero, where I
                                worked as an Intern Software Engineer in the App
                                Marketplace Billing team. I'm also familiar with{' '}
                                <b className='accent'>Unit Testing</b>,{' '}
                                <b className='accent'>Mocking</b>,{' '}
                                <b className='accent'>Fixtures</b> and{' '}
                                <b className='accent'>Validation Libraries</b>.
                                <br />
                                Not to flex (well yes, kinda), but my team's
                                average score in the Stuff Quiz went up by about
                                two points during my time there.
                            </p>
                            <p>
                                I enjoy making music, watching sports, lifting
                                weights and making sigma male meme references. I
                                wanted to be a musician for most of my teens.
                            </p>
                            <p>
                                While I enjoy making jokes and being silly, I
                                never lose sight of my goal. <br />
                                I want to help people empower themselves. <br />
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
