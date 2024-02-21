// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import CustomTextField from 'src/@core/components/mui/text-field'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Hook
import { useSettings } from 'src/@core/hooks/useSettings'
import { Grid } from '@mui/material'



const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const BlankLayoutAppBar = () => {
  // ** Hooks & Vars
  const theme = useTheme()
  const { settings } = useSettings()
  const { skin } = settings

  return (
  <>
    <Box sx={{display:"flex", justifyContent:"center", bgcolor:"black"}}>
      <Typography variant="caption" sx={{color: "white", m: 2}}> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
      <Typography variant="caption" sx={{color: "white", m: 2, fontWeight:"Bold"}}> Shop Now</Typography>
    </Box>
    <AppBar
      color='default'
      position='sticky'
      elevation={skin === 'bordered' ? 0 : 3}
      sx={{
        backgroundColor: 'background.paper',
        ...(skin === 'bordered' && { borderBottom: `1px solid ${theme.palette.divider}` })
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          p: theme => `${theme.spacing(0, 6)} !important`,
          minHeight: `${theme.mixins.toolbar.minHeight - (skin === 'bordered' ? 1 : 0)}px !important`
        }}
      >
        <Grid container space={2}>
          <Grid item xs={4}>
            <Box sx={{display:"flex", minHeight:"100%"}}>
              <LinkStyled href='/homepage'>
                <Typography variant='h4' sx={{ ml: 2.5, fontWeight: 700, lineHeight: '24px', color:"black" }}>
                  {themeConfig.templateName}
                </Typography>
              </LinkStyled>   
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{
              display:"flex",
              minWidth:"100%",
            
            }}>
              <Button sx={{fontWeight:"200", color:'black', m: 2, fontSize:'12px'}}>
                Home
              </Button>
              <Button sx={{fontWeight:"200",color:'black', m: 2, fontSize:'12px'}}>
              Contact
              </Button>
              <Button sx={{fontWeight:"200",color:'black', m: 2, fontSize:'12px'}}>
              About
              </Button>
              <Button sx={{fontWeight:"200", color:'black', m: 2, fontSize:'12px'}}>
              Sign Up
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            
          <Box sx={{
            display:"flex",
            alignItems:"center",
            minWidth:"100%",
            justifyContent:"space-around"
          }}>
            <CustomTextField
            id='input-with-icon-textfield'
            sx={{m: 2, maxWidth:"200px", maxHeight:"40px"}}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='tabler:search' />
                </InputAdornment>
              )
            }}
          />
            <Icon icon='tabler:heart' sx={{m: 2}}/>
            <Icon icon='tabler:shopping-cart' sx={{m: 2, ml:3}}/>
          </Box>
          </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default BlankLayoutAppBar
