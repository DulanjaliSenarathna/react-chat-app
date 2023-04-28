import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material';
import {useTheme } from "@mui/material/styles";
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft, X } from 'phosphor-react';

const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
  return (
    <Box sx={{width:320, height:'100vh'}}>
        <Stack sx={{height:'100%'}}>
             {/* Header */}
        <Box sx={{
          boxShadow: '0px 0px 2px rgba(0.25)',
          width: '100%',
          backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background
        }}>
          <Stack sx={{height:'100%', p:2}} direction='row' alignItems='center' spacing={3}>
             <IconButton onClick={()=>{
              dispatch(UpdateSidebarType('CONTACT'));
            }}>
              <CaretLeft/>
            </IconButton>
            <Typography variant='subtitle2'>Shared Messages</Typography>
           
          </Stack>
        </Box>
        </Stack>
    </Box>
  )
}

export default SharedMessages