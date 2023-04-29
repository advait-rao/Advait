import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
} from '@mui/material';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = (props) => {
    return (
        <Card
            className='pc'
            elevation={2}
            sx={{
                minHeight: '50vh',
                minWidth: '22rem',
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
                    {props.title}
                </Typography>
                <Typography
                    variant='body1'
                    color='#FFFFFF'
                    fontFamily={'JetBrains Mono'}
                    gutterBottom
                >
                    {props.description}
                </Typography>
                <Typography
                    variant='body1'
                    color='#FFFFFF'
                    fontFamily='JetBrains Mono'
                >
                    <b className='accent'>Built With: </b>
                    {props.builtWith}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    color: '#4E4E50',
                    paddingTop: '0',
                }}
            >
                <IconButton
                    target='_blank'
                    rel='noreferrer'
                    href={props.githubLink}
                >
                    <GitHubIcon className='icon' fontSize='medium' />
                </IconButton>
                {props.demoLink ? (
                    <IconButton
                        target='_blank'
                        rel='noreferrer'
                        href={props.demoLink}
                    >
                        <OpenInNewIcon className='icon' fontSize='medium' />
                    </IconButton>
                ) : (
                    <></>
                )}
            </CardActions>
        </Card>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    builtWith: PropTypes.string,
    demoLink: PropTypes.string,
    link: PropTypes.string,
};

export default ProjectCard;
