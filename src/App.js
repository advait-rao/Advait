import { Box } from '@mui/system';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Home from './views/Home';
import About from './views/About';

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
            <Footer />
        </Box>
    );
}

export default App;
