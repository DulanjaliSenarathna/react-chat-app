import { Box, Stack, Typography, Link, IconButton, Divider } from '@mui/material'
import React, { useState } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from '../../components/Scrollbar';
import '../../css/global.css';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';
import CreateGroup from '../../sections/main/CreateGroup';

const Group = () => {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () =>{
        setOpenDialog(false);
      }

    return (
    <>
    <Stack direction={'row'} sx={{width:'100%'}}>
        {/* Left */}
        <Box sx={{height:'100vh' , 
        backgroundColor:(theme) =>theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background , 
        width:320,
        boxShadow:'0px 0px 2px rgba(0,0,0,0.25)'}}>
            <Stack p={3} spacing={2} sx={{maxHeight:'100vh'}}>
                <Stack>
                    <Typography variant='h5'>Group</Typography>
                </Stack>
                <Stack sx={{width:'100%'}}>
                <Search>
                    <SearchIconWrapper>
                    <MagnifyingGlass color="#709CE6" />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
                </Search>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant='subtitle2' component={Link}>Create New Group</Typography>
                    <IconButton onClick={() =>{setOpenDialog(true)}}>
                        <Plus style={{color: theme.palette.primary.main}}/>
                    </IconButton>
                </Stack>
                <Divider/>
                <Stack spacing={3} className='scrollbar'  sx={{flexGrow:1, overflowY:'scroll', height:'100%'}}>
                    <SimpleBarStyle  timeout={500} clickOnTrack={false}>
                        <Stack spacing={2.5}>
                            {/*  */}
                            <Typography variant='subtitle2' sx={{color:'#676667'}}>Pinned</Typography>
                            {/* Pinned */}
                            {ChatList.filter((el)=> el.pinned).map((el)=>{
                                return <ChatElement  {...el}/>
                            })}

                              {/*  */}
                              <Typography variant='subtitle2' sx={{color:'#676667'}}>All Groups</Typography>
                            {/* Chat List */}
                            {ChatList.filter((el)=> !el.pinned).map((el)=>{
                                return <ChatElement  {...el}/>
                            })}
                        </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
        </Box>

        {/* Right */}

    </Stack>
    {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  )
}

export default Group