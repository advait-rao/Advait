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
            "An application that reads your shopping list from Evernote and uses it to create a Spotify playlist, so you can 'listen' to your shopping list. The app takes into account your music preferences when picking songs.",
        image: Grocerify,
        builtWith: ['Python', 'APIs'],
        demoLink: null,
        githubLink: 'https://github.com/advait-rao/Grocerify',
    },
    {
        title: 'GitHub Finder',
        description:
            'A user interface that allows you to search for Github users and view user data. It uses the GitHub API to access user data and Context API for state management.',
        image: githubFinder,
        builtWith: ['React', 'APIs'],
        demoLink: 'https://github-finder-advait.netlify.app/',
        githubLink: 'https://github.com/advait-rao/github-finder',
    },
    {
        title: 'Guess Who',
        description:
            "Simulates thousands of games of the board game 'Guess Who?' and tests out different playing strategies by having them play against each other. I formulated strategies using Decision Theory, Greedy Algorithms and Dichotomic Searching.",
        image: guessWho,
        builtWith: ['Python', 'Algorithms'],
        demoLink: null,
        githubLink: 'https://github.com/advait-rao/GuessWho',
    },
];

Projects.propTypes = {};

export default Projects;
