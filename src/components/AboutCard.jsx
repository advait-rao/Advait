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
                            fontFamily={'Source Code Pro'}
                        >
                            <p>
                                Kia ora! <br />
                                I'm Advait! It's pronounced <b>ād–vate</b>.
                            </p>
                            <p>
                                I'm a Computer Science and IT Management
                                graduate from the University of Auckland.
                            </p>
                            <p>
                                I'm proficient in{' '}
                                <b className='accent'>Python</b>, and have
                                worked with <b className='accent'>React</b> and{' '}
                                <b className='accent'>C#</b> at Xero. I worked
                                there as a Software Engineering Intern in the
                                Billing team for the App Marketplace. <br />I
                                learnt about{' '}
                                <b className='accent'>Unit Testing</b>,{' '}
                                <b className='accent'>Mocking</b>,{' '}
                                <b className='accent'>Fixtures</b> and{' '}
                                <b className='accent'>Validation Libraries</b>{' '}
                                in <b className='accent'>.NET Core</b> while
                                taking on Backend tickets. I also experimented
                                with{' '}
                                <b className='accent'>
                                    Component Driven Development
                                </b>{' '}
                                using <b className='accent'>Storybook</b> while
                                working on Frontend tickets.
                            </p>
                            <p>
                                I enjoy playing guitar, writing songs,{' '}
                                <s>losing at</s> Chess, as well as keeping up
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
