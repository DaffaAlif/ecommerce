// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'
import ProductCardCategory from './category'

const SwiperFreeModeCategory = ({ direction }) => {
  // ** Hook
  const [ref] = useKeenSlider({
    loop: true,
    mode: 'free',
    rtl: direction === 'rtl',
    slides: {
      perView: 5,
      spacing: 10
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <ProductCardCategory />
      </Box>
      <Box className='keen-slider__slide'>
        <ProductCardCategory />
      </Box>
      <Box className='keen-slider__slide'>
        <ProductCardCategory />
      </Box>
      <Box className='keen-slider__slide'>
        <ProductCardCategory/>
      </Box>
      <Box className='keen-slider__slide'>
        <ProductCardCategory/>
      </Box>
    </Box>
  )
}

export default SwiperFreeModeCategory
