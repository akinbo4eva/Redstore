import { useCallback, useEffect, useState } from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from './LoadingComponent';
import { useAppDispatch } from './store/configureStore';
import {fetchBasketAsync} from "../../feature/catalog/basket/basketSlice"
import { fetchCurrentUser } from '../../feature/account/accountSlice';
import HomePage from '../../feature/catalog/Home/HomePage';


function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error: any) {
      console.log(error);
    }
  },[dispatch]) 
    

  useEffect(() => {
    initApp().then(() => setLoading(false));
  },[initApp])

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

  // if (loading) return <LoadingComponent message='Initializing app...'/>
    
  
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <CssBaseline/>
      <Header handeleChange={handleChange} darkMode={darkMode}/>
      {loading? <LoadingComponent message='Initializing app...'/> 
      : location.pathname === '/' ? <HomePage/>
      :
      <Container sx={{mt:4}}>
        <Outlet />
      </Container>
    }
      
    </ThemeProvider>
  );
}
export default App;


export function dispatch (basket: any) {
  throw new Error('Function not implemented.');
}

