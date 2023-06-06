import React, { useEffect, useState } from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from './util/util';
import agent from './api/agent';
import LoadingComponent from './LoadingComponent';
import { useAppDispatch } from './store/configureStore';
import {setBasket} from "../../feature/catalog/basket/basketSlice"





function App() {
  // const {setBasket} = useStoreContext();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
      
    } else {
      setLoading(false);
    }
  },[dispatch])

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

  if (loading) return <LoadingComponent message='Initializing app...'/>
    
  
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <CssBaseline/>
      <Header handeleChange={handleChange} darkMode={darkMode}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
export default App;


export function dispatch (basket: any) {
  throw new Error('Function not implemented.');
}

