import React from 'react';
import { Paper, Avatar } from '@mui/material';
import me from '../media/meCropped.jpg';

const AboutCard = (props) => {
    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: '2vh',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#101B2B',
                alignItems: 'center',
            }}
        >
            <Avatar src={me} sx={{ width: '35%', height: '35%' }} />

            <Paper
                elevation={0}
                sx={{
                    width: 'auto',
                    color: '#FFFFFF',
                    backgroundColor: 'inherit',
                    fontSize: '2vh',
                    marginLeft: '2rem',
                    paddingRight: '1rem',
                    fontFamily: 'Source Code Pro',
                }}
            >
                <p>
                    Hi! <br />
                    I'm Advait (Ad•vāi•t).
                </p>
                <p>
                    I'm a Computer Science and IT Management student at the
                    University of Auckland.
                </p>
                <p>
                    I'm proficient in <b className='accent'>Python</b> and I've
                    used it for a few of my projects (you'll find them below),
                    and I'm currently learning <b className='accent'>React</b>{' '}
                    and <b className='accent'>C#</b> at Xero, where I'm an
                    Intern Software Engineer. I'm also comfortable writing unit
                    tests, and possess some knowledge of related concepts and
                    libraries like <b className='accent'>Mocking</b>,{' '}
                    <b className='accent'>Autofixure</b> and{' '}
                    <b className='accent'>React Testing Library</b>.
                </p>
                <p>
                    When I'm not writing code, I like to write and record songs,
                    watch sports (cricket, formula1 and football) and make sigma
                    male meme references. <br /> I also like going to the gym
                    and making #gains.
                </p>
                <p>
                    Jokes apart, I want my time here to be spent creating value
                    and having a positive impact on the people I meet (and even
                    the people I don't). <br />
                    Everything I do is to further this ambition.
                </p>
            </Paper>
        </Paper>
    );
};

AboutCard.propTypes = {};

export default AboutCard;
