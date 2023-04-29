import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import HeaderPaper from '../components/HeaderPaper';
import ProjectCard from '../components/ProjectCard';
import githubFinder from '../media/githubFinder.png';
import guessWho from '../media/guessWho.png';
import Grocerify from '../media/Grocerify.png';

const Projects = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            id='projects'
        >
            <Container className='pageContainer'>
                <HeaderPaper header='Projects' />
                <Box sx={{ marginTop: '2vh' }}>
                    <Grid container spacing={2}>
                        {projects.map((project) => (
                            <Grid item xs>
                                <ProjectCard
                                    className='abc'
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    builtWith={project.builtWith}
                                    demoLink={project.demoLink}
                                    githubLink={project.githubLink}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

const projects = [
    {
        title: 'Grocerify',
        description:
            "Grocerify is a Python application that reads your shopping list from Evernote and creates a Spotify playlist based on the items on your shopping list. The idea is to 'listen' to your shopping list. The app accesses your Spotify data to pick songs you haven't heard before and that you're likely to enjoy.",
        image: Grocerify,
        builtWith: 'Python',
        demoLink: null,
        githubLink: 'https://github.com/advait-rao/Grocerify',
    },
    {
        title: 'Guess Who',
        description:
            "Simulates thousands of games of the board game 'Guess Who?' and tests out different playing strategies by having them play against each other. I formulated strategies using Decision Theory, Greedy Algorithms and Dichotomic Searching.",
        image: guessWho,
        builtWith: 'Python (and math)',
        demoLink: null,
        githubLink: 'https://github.com/advait-rao/GuessWho',
    },
    {
        title: 'GitHub Finder',
        description:
            'A user interface that allows you to search for Github users and view user data. It uses the GitHub API to access user data and Context API for state management.',
        image: githubFinder,
        builtWith: 'React, HTML, CSS',
        demoLink: 'https://github-finder-advait.netlify.app/',
        githubLink: 'https://github.com/advait-rao/github-finder',
    },
];

Projects.propTypes = {};

export default Projects;
