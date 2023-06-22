import React from "react";

import headerWhite from "../stories/assets/Group 1 white.svg";
import facebook from "../stories/assets/Facebook.svg";
import linkedin from "../stories/assets/Linkedin.svg";
import twitter from "../stories/assets/Twitter.svg";
import instagram from "../stories/assets/Instagram.svg";
import { Divider, Grid } from "@mui/material";

const styles = {


}


const Footer: React.FC = () => {


  return (
    <>
      <Grid container sx={{ backgroundColor: '#01487E' }}>
        <Grid
          container
          sx={{ backgroundColor: '#01487E' }}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          gap={20}
          py={6}
          px={{ md: 18 }}
        >
          <Grid item>
            <Grid container direction="column" gap={3}>
              <Grid item>
                <img src={headerWhite} alt="Header White" />
              </Grid>
              <Grid item sx={{ color: 'white' }}>
                Defending your digital world, one byte at a time.
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" gap={3}>
              <Grid item sx={{ color: 'white' }}>Contact</Grid>
              <Grid item sx={{ color: 'white' }}>+91 9818086856</Grid>
              <Grid item sx={{ color: 'white' }}>Connect@incognimous.com</Grid>
              <Grid item sx={{ color: 'white' }}>Contact</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" gap={3}>
              <Grid item sx={{ color: 'white' }}>Company</Grid>
              <Grid item sx={{ color: 'white' }}>About Us</Grid>
              <Grid item sx={{ color: 'white' }}>Resources</Grid>
              <Grid item sx={{ color: 'white' }}>FAQ</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" gap={3}>
              <Grid item sx={{ color: 'white' }}>Social</Grid>
              <Grid container direction="row" gap={2}>
                <Grid item>
                  <img src={facebook} alt="Facebook" />
                </Grid>
                <Grid item>
                  <img src={linkedin} alt="LinkedIn" />
                </Grid>
                <Grid item>
                  <img src={twitter} alt="Twitter" />
                </Grid>
                <Grid item>
                  <img src={instagram} alt="Instagram" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" gap={2}>
          <Divider sx={{ margin: '10px', backgroundColor: 'white', width: '100%' }} />

          <Grid item sx={{ color: 'white' }} paddingBottom={5}>
            ©2020-2022 Incognimous Lab | All rigts reserved.
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;