import { Box } from '@mui/system';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Resume from './views/Resume';
import Projects from './views/Projects';
import './App.css';

function App() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Nav />
            <Home />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </Box>
    );
}

export default App;
