import { Box } from '@mui/system';
import Footer from './layout/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';
import './App.css';

function App() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </Box>
    );
}

export default App;
