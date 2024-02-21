// ** MUI Imports
import Card from '@mui/material/Card'
import { Box } from '@mui/material'

import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'

const ProductCardCategory = () => {
  return (
    <>
      <Card sx={{display:"flex", flexDirection:"column" ,minHeight:"200px", minWidth:"200px", alignItems:"center", justifyContent:"center"}}>
        <Icon icon='tabler:heart' sx={{m: 2, color:"black"}} />
        <Typography>Category</Typography>
      </Card>
    </>
  )
}

export default ProductCardCategory
