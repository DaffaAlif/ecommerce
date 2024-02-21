// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'
import ProductCard from './Product'

const SwiperFreeMode = ({ direction }) => {
  // ** Hook
  const [ref] = useKeenSlider({
    loop: true,
    mode: 'free',
    rtl: direction === 'rtl',
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <ProductCard />
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard />
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard />
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard />
      </Box>
      <Box className='keen-slider__slide'>
      <ProductCard />
      </Box>
    </Box>
  )
}

export default SwiperFreeMode