import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
             <AppBar position="static">
                 <Toolbar variant="dense" className='container'>
                     <Box paddingX= {20} className='cursor' >
                         <Typography variant="h5" color="inherit">
                             Blog Pessoal
                         </Typography>
                     </Box>

                     <Box display="flex" justifyContent="start">
                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Home
                             </Typography>
                         </Box>

                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Postagens
                             </Typography>
                     </Box>

                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Temas
                             </Typography>
                         </Box>

                         <Box mx={1} className='cursor'>
                             <Typography variant="h6" color="inherit">
                                 Cadastrar Tema
                             </Typography>
                             
                         </Box>
                         

                         <Box paddingX= {15} mx={1} className='cursor'>
                         <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Entrar
                                </Button>
                            </Link>
                             
                         </Box>
                         
                        
                     </Box>
                 </Toolbar>
             </AppBar>
         </>
      
    )
}

export default Navbar;