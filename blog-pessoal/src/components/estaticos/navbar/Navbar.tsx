import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate } from 'react-router-dom'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
       navigate('/login')
    }

    return (
        <>
             <AppBar position="static">
                 <Toolbar variant="regular" className='container'>
                     <Box paddingX= {3} className='cursor' >
                         <Typography variant="h5" color="inherit">
                             Blog Pessoal
                         </Typography>
                     </Box>

                     <Box display="flex" justifyContent="start">
                         <Box paddingX= {3} mx={1} className='cursor'>
                         <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Home
                                </Button>
                            </Link>
                             
                         </Box>

                       
                     <Box paddingX= {3} mx={1} className='cursor'>
                         <Link to='/posts' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Postagens
                                </Button>
                            </Link>
                            
                           
                             
                         </Box>
                        
                
                         <Box paddingX= {3} mx={1} className='cursor'>
                         <Link to='/formularioTema' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar Tema
                                </Button>
                            </Link>
                             
                         </Box>
                         

                         <Box paddingX= {3} mx={1} className='cursor'>
                         <Link to='/temas' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Temas
                                </Button>
                            </Link>
                             
                         </Box>
                         

                         <Box paddingX= {3} mx={1} className='cursor'>
                         <Link to='/Login' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Entrar
                                </Button>
                            </Link>
                            
                            
                             
                         </Box>
                         <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" >
                                    SAIR
                                </Typography>
                            </Box>
                         
                        
                     </Box>
                 </Toolbar>
             </AppBar>
         </>
      
    )
}

export default Navbar;