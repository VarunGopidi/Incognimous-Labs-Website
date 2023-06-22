import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../atoms/button";
import { useNavigate } from "react-router-dom";

export interface HomeSliderProps {
    heading?: string;
    info?: string;
    image?: string;
};

const HomeSlider = ({ image, heading, info }: HomeSliderProps) => {

    const history = useNavigate();


    const handleContact = () => {
        history('/contactus');
    };

    const styles = {
        grid: {
            display: 'flex',
            aligItems: 'flex-start',
            flexDirection: 'row' as 'row',
            padding: '0px',
            position: 'absolute' as 'absolute',
            height: '326px',
            width: '1220px',
            gap: '80px',
        },

        textGrid: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column' as 'column',
            padding: '0px',
            height: '280px',
            width: '540px',
        },

        heading: {
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '64px',
            lineHeight: '100%',
            textTransform: 'uppercase' as 'uppercase',
            /* or 64px */
            color: '#000000',
            padding: '0px 0px 16px 0px',
        },

        info: {
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '150%',
            /* or 64px */
            color: '#666666',
            padding: '0px 0px 56px 0px',
        },

        buttonGrid: {
            display: 'flex',
            justfyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row' as 'row',
            gap: '10px',
        },

        imageGrid: {
            width: '600px',
            height: '326px',
        },
    };

    return (
        <Grid container direction={{ md: 'row', xs: 'column-reverse' }} rowGap={10} justifyContent={'space-around'} py={10} px={15}>
            <Grid item xs={12} md={6} px={2}>
                <Typography style={styles.heading}>{heading}</Typography>
                <Typography style={styles.info}>{info}</Typography>
                <Grid style={styles.buttonGrid}>
                    <Button text='GET IN TOUCH' backgroundColor="#01487E" color="#FFFFFF" onClick={handleContact}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={'auto'}>
                <img src={image}/>
            </Grid>
        </Grid>
    );

};

export default HomeSlider;

/*const StyledBoxCard = styled(Box)({
  border: `1px solid ${theme.palette.other.stroke2}`,
  borderRadius: "0.5rem",
  padding: "1rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.structural.card_hover,
  },
});*/