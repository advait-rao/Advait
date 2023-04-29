import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Chip,
    Stack,
} from '@mui/material';
import { Typography } from '@mui/material';

const ProjectCard = (props) => {
    return (
        <Card
            className='pc'
            elevation={2}
            sx={{
                minHeight: '50vh',
                minWidth: '22rem',
                maxWidth: '100%',
                backgroundColor: '#101B2B',
            }}
        >
            <CardMedia
                component='img'
                alt={props.title}
                height='auto'
                image={props.image}
            />
            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography
                    gutterBottom
                    variant='h4'
                    component='div'
                    color='#FFFFFF'
                    fontFamily={'JetBrains Mono'}
                    fontWeight={'bold'}
                >
                    <a
                        href={
                            props.demoLink ? props.demoLink : props.githubLink
                        }
                        target='_blank'
                        rel='noreferrer'
                        className='link'
                    >
                        {props.title}
                    </a>
                </Typography>
                <Typography
                    variant='body1'
                    color='#FFFFFF'
                    fontFamily={'JetBrains Mono'}
                    gutterBottom
                >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    color: '#4E4E50',
                    paddingTop: '0',
                    flexDirection: 'row-reverse',
                }}
            >
                {' '}
                <Stack direction={'row'} spacing={1}>
                    {props.builtWith.map((tool) => (
                        <Chip
                            color='error'
                            label={tool}
                            sx={{
                                fontFamily: 'JetBrains Mono',
                                fontWeight: 'bold',
                                color: '#ffffff',
                                backgroundColor: '#950740',
                            }}
                        />
                    ))}
                </Stack>
            </CardActions>
        </Card>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    builtWith: PropTypes.array,
    demoLink: PropTypes.string,
    githubLink: PropTypes.string,
};

export default ProjectCard;
