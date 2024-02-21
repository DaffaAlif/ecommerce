// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const ProductCard = () => {
  return (
    <>
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.jpg' />
      <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h5' sx={{ mb: 2 }}>
          Apple Watch
        </Typography>
        <Typography sx={{ mb: 2 }}>$249</Typography>
        
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Add To Cart
      </Button>
    </Card>
    </>
  )
}

export default ProductCard
