import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const SettingPage = () => {
  return (
    <div>
        <Layout>
            <Box>
                <Typography  sx={{padding:'20px'}}>Setting</Typography>
            </Box>
        </Layout>
    </div>
  )
}

export default SettingPage