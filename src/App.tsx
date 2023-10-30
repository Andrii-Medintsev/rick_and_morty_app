import { Box, ThemeProvider, createTheme } from '@mui/material';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#f5f5f5',
          '&.Mui-selected': {
            backgroundColor: '#f5f5f5',
            color: '#202329',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          },
          '&.MuiPaginationItem-previousNext': {
            backgroundColor: '#f5f5f5',
            color: '#272B33',
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        fontFamily: 'Roboto, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />

        <Box
          sx={{
            background: '#272B33',
            paddingX: '100px',
            paddingTop: '40px',
            paddingBottom: '16px',
            flex: 1,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/character/:id'
              element={<h1>Charactersfg sdfgsdfg</h1>}
            />
          </Routes>
        </Box>

        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default App;
