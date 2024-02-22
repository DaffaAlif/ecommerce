// ** MUI Imports
import Card from '@mui/material/Card'
import { Box } from '@mui/material'

import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'

const ProductCardCategory = () => {
  return (
    <>
      <Card sx={{display:"flex", flexDirection:"column" , minHeight:"150px", Width:"150px", alignItems:"center", justifyContent:"center"}}>
        <Icon icon='tabler:heart' sx={{ color:"black"}} />
        <Typography variant='caption'>Category</Typography>
      </Card>
    </>
  )
}

export default ProductCardCategory
