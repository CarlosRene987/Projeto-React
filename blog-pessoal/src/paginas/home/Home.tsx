import React from 'react';
import { Grid, Button, Typography} from '@material-ui/core';  
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import useLocalStorage from 'react-use-localstorage';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import { useEffect } from 'react';

function Home() {  
    
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModalPostagem />
                        </Box>
                        
                        <Box paddingX= {3} mx={1} className='cursor'>
                         <Link to='/posts' className='postagemhome'>
                         
                                <Button type='submit' variant='contained' color='primary' >
                                   Ver Postagens
                                </Button>
                            </Link>
                             
                         </Box>
                         
                        
                        
                   </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                < TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;


