import { Box } from '@mui/material'
import { ReactNode } from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'


interface prop{
    children?:ReactNode
}

const Layout = ({children}: prop) => {
  return (
    <Box  sx={{height:"100vh"}}>
        <TopBar></TopBar>
        <Box sx={{display:"flex",height:'100%'}}>
            <SideBar ></SideBar>
            <Box>{children}</Box>
        </Box>
    </Box>
  )
}

export default Layout