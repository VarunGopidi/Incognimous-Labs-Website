import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

export interface TextGridProps {
    heading: string;
};


const TextFieldGrid = ({ heading }: TextGridProps) => {
    const styles = {
        grid: {
            display: 'flex', 
            alignItems : 'flex-start',
            flexDirection: 'column' as 'column',
            width: '440px',
            height: '120px',
    
        },
    
        heading: {
            height: '24px',
            width:'81px',
            padding: '0px 0px 16px 0px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '24px',
            lineHeight: '24px',
            
        },

        input :{
            width: '500px',
            height: '48px',
            radius: '8px',
            border: '#81C8FE',

        }
        
    };
    
    return (
        <Grid style={styles.grid} >
            <Typography style={styles.heading}>{heading}</Typography>
            <TextField style={styles.input} required />
        </Grid>
    );
};

export default TextFieldGrid;