import { Grid, Typography } from "@mui/material";
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import AnalyticsWebsiteAnalyticsSlider from "src/views/homepage";
import Box from "@mui/material/Box";
import KeenSliderWrapper from "src/@core/styles/libs/keen-slider";
import SwiperFreeMode from "src/views/homepage/SwiperFreeMode";
import SwiperFreeModeCategory from "src/views/homepage/SwiperFreeModeCategory";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';


const Homepage = () => {
    return (
      <Box sx={{mt: 10, mx:30}}>
        <KeenSliderWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <AnalyticsWebsiteAnalyticsSlider />
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <Grid container>
                        <Grid item xs={2}>
                            <Box xs={{display:"flex", alignItems:"center", minHeight:"100%"}}>
                                 <Typography variant="h4" sx={{fontWeight:"bold"}}>Flash Sale</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box>
                                <Typography variant="caption" sx={{mb: 5}}>days &#160; hours&#160; minute&#160; second</Typography>
                                <Typography variant="h5" sx={{mb: 5}}>02&#160; :&#160; 03 &#160; :&#160;  01  &#160;: &#160; 04</Typography>
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
                    <Box xs={{display:"flex", alignItems:"center", minHeight:"100%"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold", mb:6}}>Browse By Category</Typography>
                    </Box>
                    <SwiperFreeModeCategory />
                    <Divider sx={{my:10}}/>
                </Grid>
                <Grid item xs={12}>
                    <Box xs={{display:"flex", alignItems:"center", minHeight:"100%"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold", mb:6}}>Best Selling Products</Typography>
                    </Box>
                    <SwiperFreeMode />
                </Grid>
                    <Grid item xs={12}>
                        <Box
                            component="img"
                            sx={{
                                height: "100%",
                                width: "100%",
                                my: 10
                            }}
                            alt="images"
                            src="/images/banners/banner-ps.jpg"
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={12}>
                            <Grid item xs={6}>
                            <Box
                                component="img"
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    my: 10
                                }}
                                alt="images"
                                src="/images/banners/banner-ps2.jpg"
                            />
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                my: 10
                                            }}
                                            alt="images"
                                            src="/images/banners/banner-ps2.jpg"
                                        />

                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                my: 10
                                            }}
                                            alt="images"
                                            src="/images/banners/banner-ps2.jpg"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                my: 10
                                            }}
                                            alt="images"
                                            src="/images/banners/banner-ps.jpg"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>     
            </Grid>
        </KeenSliderWrapper>
      </Box>
    )
}

Homepage.getLayout = page => <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
Homepage.authGuard = false

export default Homepage