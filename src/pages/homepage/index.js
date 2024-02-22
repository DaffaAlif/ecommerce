import { Avatar, Grid, Typography } from "@mui/material";
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import AnalyticsWebsiteAnalyticsSlider from "src/views/homepage";
import Box from "@mui/material/Box";
import KeenSliderWrapper from "src/@core/styles/libs/keen-slider";
import SwiperFreeMode from "src/views/homepage/SwiperFreeMode";
import SwiperFreeModeCategory from "src/views/homepage/SwiperFreeModeCategory";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import Icon from 'src/@core/components/icon'
import SwiperFreeModeMoreProduct from "src/views/homepage/SwiperFreeModeMoreProducts";



const Homepage = () => {
    return (
        <>
      <Box sx={{mt: 10, mx:'135px'}}>
        <KeenSliderWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <AnalyticsWebsiteAnalyticsSlider />
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} >
                                <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%', mt:10}}>
                                    <Box sx={{bgcolor:'red', height:'20px', width:'10px', borderRadius:'20', mr:'10px'}}>
                                    </Box>
                                    <Typography variant="caption" sx={{color:'red', fontWeight:'bold'}}>Today's</Typography>
                                </Box>
                                
                            </Grid>
                            <Grid item xs={2} >
                                <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%'}}>
                                    <Box>
                                        <Typography variant="h4" sx={{fontWeight:"bold", color:'black', mt:5}}>Flash Sale</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        <Grid item xs={7}>
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', ml:5}}>
                            <Grid container spacing={5}>
                                <Grid item>
                                    <Box sx={{display:'flex', flexDirection:'column'}}>
                                        <Box>
                                            <Typography variant='caption' sx={{fontWeight:'bold', color:'black'}}>days</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant='h4' sx={{fontWeight:'bold', color:'black'}}>01</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100%'}}>
                                        <Box>
                                            <Typography variant='h4' sx={{color:'red'}}>:</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{display:'flex', flexDirection:'column'}}>
                                        <Box>
                                            <Typography variant='caption' sx={{fontWeight:'bold', color:'black'}}>hours</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant='h4' sx={{fontWeight:'bold', color:'black'}}>02</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100%'}}>
                                        <Box>
                                            <Typography variant='h4' sx={{color:'red'}}>:</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{display:'flex', flexDirection:'column'}}>
                                        <Box>
                                            <Typography variant='caption' sx={{fontWeight:'bold', color:'black'}}>minutes</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant='h4' sx={{fontWeight:'bold', color:'black'}}>04</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100%'}}>
                                        <Box>
                                            <Typography variant='h4' sx={{color:'red'}} >:</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{display:'flex', flexDirection:'column'}}>
                                        <Box>
                                            <Typography variant='caption' sx={{fontWeight:'bold', color:'black'}}>seconds</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant='h4' sx={{fontWeight:'bold', color:'black'}}>05</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                           <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end', minHeight:'100%' }}>
                                <Button sx={{boxShadow:1, borderRadius:10, color:'black', p:2, m: 2}}>
                                  <Icon icon='tabler:arrow-narrow-left' fontSize={10} />
                                </Button>
                                <Button sx={{boxShadow:1, borderRadius:10, color:'black', p:2, m: 2}}>
                                  <Icon icon='tabler:arrow-narrow-right' fontSize={10} />
                                </Button>
                           </Box> 
                        </Grid>
                        </Grid>
                        </Box>
                </Grid>
                <Grid item xs={12}>
                    <SwiperFreeMode />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{display:"flex", justifyContent:"center", mb:6}}>
                     <Button variant="contained" sx={{bgcolor:"red", my:10}}> View All </Button>
                    </Box>
                    <Divider/>
                </Grid>
                <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} >
                        <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%', mt:5}}>
                            <Box sx={{bgcolor:'red', height:'20px', width:'10px', borderRadius:'20', mr:'10px'}}>
                            </Box>
                            <Typography variant="caption" sx={{color:'red', fontWeight:'bold'}}>Categories</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={2} >
                        <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%'}}>
                            <Box>
                                <Typography variant="h4" sx={{fontWeight:"bold", color:'black', mt:5}}>Category</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} >
                        <Box sx={{display:'flex',  justifyContent:'end', minHeight:'100%',}}>
                            <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end', minHeight:'100%' }}>
                                <Button sx={{boxShadow:1, borderRadius:10, color:'black', p:2, m: 2}}>
                                    <Icon icon='tabler:arrow-narrow-left' fontSize={10} />
                                </Button>
                                <Button sx={{boxShadow:1, borderRadius:10, color:'black', p:2, m: 2}}>
                                    <Icon icon='tabler:arrow-narrow-right' fontSize={10} />
                                </Button>
                           </Box> 
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Box sx={{my:10}}>
                         <SwiperFreeModeCategory />
                        </Box>
                    </Grid>
                </Grid>
                    
                    <Divider sx={{mt:15}}/>
                </Grid>
                <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} >
                            <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%', mt:5}}>
                                <Box sx={{bgcolor:'red', height:'20px', width:'10px', borderRadius:'20', mr:'10px'}}>
                                </Box>
                                <Typography variant="caption" sx={{color:'red', fontWeight:'bold'}}>This Month</Typography>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={2} >
                            <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%'}}>
                                <Box>
                                    <Typography variant="h4" sx={{fontWeight:"bold", color:'black', mt:5}}>Best Seller</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={10} >
                            <Box sx={{display:'flex',  justifyContent:'end', minHeight:'100%'}}>
                                <Box>
                                    <Button variant="contained" sx={{bgcolor:"red", my:5}}> View All </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <SwiperFreeMode />
                </Grid>
                    <Grid item xs={12}>
                        <Box
                            component="img"
                            sx={{
                                height: "500px",
                                width: "100%",
                                my:15
                            }}
                            alt="images"
                            src="/images/banners/enhance.png"
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} >
                                <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%',}}>
                                    <Box sx={{bgcolor:'red', height:'20px', width:'10px', borderRadius:'20', mr:'10px'}}>
                                    </Box>
                                    <Typography variant="caption" sx={{color:'red', fontWeight:'bold'}}>Our Product</Typography>
                                </Box>
                                
                            </Grid>
                            <Grid item xs={4} >
                                <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%'}}>
                                    <Box>
                                        <Typography variant="h4" sx={{fontWeight:"bold", color:'black', mt:5}}>Explore our Products</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={8} >
                                <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end', minHeight:'100%' }}>
                                    <Button sx={{boxShadow:1, borderRadius:10, color:'black', p:2, m: 2}}>
                                    <Icon icon='tabler:arrow-narrow-left' fontSize={10} />
                                    </Button>
                                    <Button sx={{boxShadow:1, borderRadius:10, color:'black', p:2, m: 2}}>
                                    <Icon icon='tabler:arrow-narrow-right' fontSize={10} />
                                    </Button>
                                </Box> 
                            </Grid>
                            <Grid item xs={12}>
                                <SwiperFreeModeMoreProduct />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display:'flex',  justifyContent:'center', minHeight:'100%', mt:15}}>
                                    <Box>
                                        <Button variant="contained" sx={{bgcolor:"red", my:5}}> View All Products</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        </Box>
                </Grid>
                    <Grid item xs={12}>
                        <Box sx={{mb:5}}>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%', mt:5}}>
                                        <Box sx={{bgcolor:'red', height:'20px', width:'10px', borderRadius:'20', mr:'10px'}}>
                                        </Box>
                                        <Typography variant="caption" sx={{color:'red', fontWeight:'bold'}}>Featured</Typography>
                                    </Box>
                                    
                                </Grid>
                                <Grid item xs={2} >
                                    <Box sx={{display:'flex',  alignItems:'center', minHeight:'100%'}}>
                                        <Box>
                                            <Typography variant="h4" sx={{fontWeight:"bold", color:'black', mt:5}}>New Arrival</Typography>
                                        </Box>
                                </Box>
                            </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={12}>
                            <Grid item xs={6}>
                            <Box
                                component="img"
                                sx={{
                                    height: "600px",
                                    width: "100%",
                        
                                }}
                                alt="images"
                                src="/images/banners/ps5.png"
                            />
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "284px",
                                                width: "100%",
                                            }}
                                            alt="images"
                                            src="/images/banners/womens_collection.png"
                                        />

                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "284px",
                                                width: "100%",
                                
                                            }}
                                            alt="images"
                                            src="/images/banners/speakers.png"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "284px",
                                                width: "100%",
                                              
                                            }}
                                            alt="images"
                                            src="/images/banners/perfume.png"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display:'flex', justifyContent:'space-around', my:'100px'  }}>
                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            <Box sx={{borderRadius: '50%', bgcolor:'black', minWidth:'80px', minHeight:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                <Box sx={{borderRadius: '50%', bgcolor:'white', minWidth:'60px', minHeight:'60px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                    <Icon icon='tabler:car' fontSize={45} />
                                                </Box>  
                                            </Box>    
                                            
                                        </Box>
                                        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                            <Typography variant='h5'>FREE AND FAST DELIVERY</Typography>
                                            <Typography variant='subtitle2'>Free delivery for all orders over $140</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            <Box sx={{borderRadius: '50%', bgcolor:'black', minWidth:'80px', minHeight:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                <Box sx={{borderRadius: '50%', bgcolor:'white', minWidth:'60px', minHeight:'60px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                    <Icon icon='tabler:car' fontSize={45} />
                                                </Box>  
                                            </Box>    
                                            
                                        </Box>
                                        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                            <Typography variant='h5'>24/7 CUSTOMER SERVICE</Typography>
                                            <Typography variant='subtitle2'>Friendly 24/7 customer support</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            <Box sx={{borderRadius: '50%', bgcolor:'black', minWidth:'80px', minHeight:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                <Box sx={{borderRadius: '50%', bgcolor:'white', minWidth:'60px', minHeight:'60px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                                    <Icon icon='tabler:car' fontSize={45} />
                                                </Box>  
                                            </Box>    
                                            
                                        </Box>
                                        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                            <Typography variant='h5'>MONEY BACK GUARANTEE</Typography>
                                            <Typography variant='subtitle2'>We reurn money within 30 days</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>     
            </Grid>
        </KeenSliderWrapper>
      </Box>
      <Box sx={{minHeight:'300px', minWidth:'100%', bgcolor:'black', color:'black', mt:20}}>

      </Box>
      </>
    )
}

Homepage.getLayout = page => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
Homepage.authGuard = false

export default Homepage