import React, { useState } from 'react';
import  Catalog from "../../feature/catalog/Catalog";
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : "#121212"
      }
    }
  })

  const handleChange = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header handeleChange={handleChange} darkMode={darkMode}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
export default App;
