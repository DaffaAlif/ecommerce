// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'
import ProductCard from './product'

const SwiperFreeModeMoreProduct = ({ direction }) => {
  // ** Hook
  const [ref] = useKeenSlider({
    loop: true,
    mode: 'snap',
    rtl: direction === 'rtl',
    slides: {
      perView: 4,
      spacing: 10
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <ProductCard sx={{m:1}}/>
        <ProductCard sx={{m:1}}/>
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard sx={{m:1}}/>
        <ProductCard sx={{m:1}}/>
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard sx={{mb:1}}/>
        <ProductCard sx={{m:1}}/>
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard sx={{m:1}}/>
        <ProductCard sx={{m:1}}/>
      </Box>
      <Box className='keen-slider__slide'>
        <ProductCard sx={{m:1}}/>
        <ProductCard sx={{m:1}}/>
      </Box>
    </Box>
  )
}

export default SwiperFreeModeMoreProduct
