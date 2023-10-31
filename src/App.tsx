import { Box, ThemeProvider, createTheme } from '@mui/material';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import CharacterPage from './pages/CharacterPage';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#272B33',
          width: '140px',
          height: '60px',
          fontWeight: 400,
          backgroundColor: grey[100],
          '&:hover': {
            backgroundColor: grey[200],
          },
        },
      },
    },
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
            paddingY: '40px',
            flex: 1,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/character/:id'
              element={<CharacterPage />}
            />
          </Routes>
        </Box>

        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default App;
