import { Box } from '@mui/system';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

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
            <Contact />
            <Footer />
        </Box>
    );
}

export default App;
