import React from "react";
import { Grid } from "@mui/material";
import image1 from "../stories/assets/index1233.svg";

import image2 from "../stories/assets/DU_Logo 2.svg";
import image3 from "../stories/assets/Why-LPU-is-regarded-Top-university-Body_Images 2.svg";
import image4 from "../stories/assets/Jaipuria_Institute_of_management_logo 2.svg";

export interface PhotoGridProps {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

const Styles = {

  gridStyle: {
    display: "flex",
    padding: "80px 200px",
    gap: "40px",
    width: "1440px",
    height: "232px",
    background: "#F6FAFE",

  },

  innerGrid1: {
    width: "230px",
    height: "72px",
    left: "200px",
    top: "80px",
  },

  innerGrid2: {
    width: "230px",
    height: "72px",
    left: "470px",
    top: "80px",
  },

  innerGrid3: {
    width: "230px",
    height: "72px",
    left: "740px",
    top: "80px",
  },

  innerGrid4: {
    width: "230px",
    height: "72px",
    left: "1010px",
    top: "80px",
  },
};


const PhotoGrid = (props: PhotoGridProps) => {
  return (
    <div>
      <Grid container alignItems={'center'}  px={{xs:12 ,md:25}} py={{md:10}} sx={{ backgroundColor: '#F6FAFE' }} >

        <Grid item xs={6} md={3}>
          <img src={image1}></img>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={image2}></img>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={image3}></img>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={image4}></img>
        </Grid>
      </Grid>


    </div>
  );
};

export default PhotoGrid;