import MainContent from './component/MainContent';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Box from '@mui/material/Box';
function App() {

  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F4F2F3',
        height: '100vh'
      }}
    >
      <Navbar />
      <MainContent />
      <Footer />
    </Box>

  );
}

export default App;
