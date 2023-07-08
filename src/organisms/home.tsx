import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { Grid, Box, styled, Typography, Divider } from '@mui/material';
import Footer from '../molecules/footer';
import HomeSlider from '../molecules/homeSlider';
import Navbar from '../molecules/navbar';
import PhotoGrid from '../molecules/photogrid';
import image13 from '../stories/assets/image 13.svg';
import image12 from '../stories/assets/image 12.svg';
import image10 from '../stories/assets/image 10.svg';


const Homepage: React.FC = () => {

  const RelativeBox = styled(Box)({
    position: 'relative',

  });

  const StyledBox = styled(Box)({
    margin: '0 80px',
    position: 'absolute',
    background: '#FFF',
  })

  const elements: React.ReactNode[] = [
    <HomeSlider image={image10}
      heading='PREVENTING CYBER THREATS'
      info='Welcome to incognimous labs, where we provide top-notch cybersecurity solutions to protect your business from cyber threats.,'
    />,
    <HomeSlider image={image12}
      heading='OPERATING & MAINTAINING'
      info='Welcome to incognimous labs, where we provide top-notch cybersecurity solutions to protect your business from cyber threats.,'
    />,
    <HomeSlider image={image13}
      heading='DESIGN & DEVELOPMENT'
      info='Welcome to incognimous labs, where we provide top-notch cybersecurity solutions to protect your business from cyber threats.,'
    />
  ];

  const [currentElement, setCurrentElement] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement + 1) % elements.length);
    }, 2000); // Change element every 2 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [elements.length]);


  return (
    <>

      <Grid container direction={'column'} alignContent={'center'} >
        <Grid item><Navbar /></Grid>
        {/* <Grid item> <HomeSlider image={image13}
          heading='PREVENTING CYBER THREATS'
          info='Welcome to incognimous labs, where we provide top-notch cybersecurity solutions to protect your business from cyber threats.,'
        /></Grid> */}
        <Grid item>
          {elements[currentElement]}
        </Grid>
        <Grid item> <PhotoGrid /></Grid>
        <Grid item alignContent={'center'} py={10} md={4} px={60}>
          <Typography sx={{
            fontFamily: 'Roboto, sans-serif', fontWeight: '700',
            fontSize: '40px',
            lineHeight: '48px',
            textAlign: 'center',
          }}>Matters in place of matter's</Typography>

          <Typography sx={{
            fontFamily: 'Roboto, sans-serif', fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
          }}>United by the team, concert on risk factors to reduce the sympotomus</Typography>

        </Grid>

        <Grid item px={30} py={3}>
          <Grid container flexDirection={'row'} columnGap={9}>
            <Grid item>
              <Grid container rowGap={2} flexDirection={'column'} alignItems={'center'}>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '600',
                    fontSize: '40px',
                    lineHeight: '40px',
                    textAlign: 'center',
                    color: '#01487E',
                  }} >100+ </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '18.75px',
                    textAlign: 'center',
                  }} >Training Sessions </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider sx={{ margin: '10px', backgroundColor: '#01487E', height: '100%', width: '1px' }} />
            </Grid>

            <Grid item>
              <Grid container rowGap={2} flexDirection={'column'} alignItems={'center'}>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '600',
                    fontSize: '40px',
                    lineHeight: '40px',
                    textAlign: 'center',
                    color: '#01487E',
                  }} >10+ </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '18.75px',
                    textAlign: 'center',
                  }} >Team Members </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider sx={{ margin: '10px', backgroundColor: '#01487E', height: '100%', width: '1px' }} />
            </Grid>

            <Grid item>
              <Grid container rowGap={2} flexDirection={'column'} alignItems={'center'}>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '600',
                    fontSize: '40px',
                    lineHeight: '40px',
                    textAlign: 'center',
                    color: '#01487E',
                  }} >3+ </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '18.75px',
                    textAlign: 'center',
                  }} >Years of Experience</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider sx={{ margin: '10px', backgroundColor: '#01487E', height: '100%', width: '1px' }} />
            </Grid>

            <Grid item>
              <Grid container rowGap={2} flexDirection={'column'} alignItems={'center'}>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '600',
                    fontSize: '40px',
                    lineHeight: '40px',
                    textAlign: 'center',
                    color: '#01487E',
                  }} >15+ </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontFamily: 'Roboto, sans-serif', fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '18.75px',
                    textAlign: 'center',
                  }} >Project Completions </Typography>
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
        <Grid item>
          
        </Grid>
        <Grid item>
          <RelativeBox>
            {/* <StyledBox>
          
            <Grid container p={5} justifyContent={'space-between'} alignItems={'center'} width={100} >
              <Grid item> uabfkjsoklsndsljgopadjg
              </Grid>
              <Grid item>
                gopidi
              </Grid>
            </Grid>
          </StyledBox> */}
            <Footer />
          </RelativeBox>
        </Grid>
      </Grid>
    </>
  );
}

export default Homepage;
