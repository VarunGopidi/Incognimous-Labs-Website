import { Grid, Typography } from "@mui/material";
import React from "react";

export interface TextGridProps {
    heading: string;
    info: string;
};


const TextGrid = ({ heading, info }: TextGridProps) => {
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
            width:'440px',
            padding: '0px 0px 24px 0px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            
            
        },

        info: {
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            height: '72px',
            width:'400px',
            lineHeight: '150%',
        },
        
    };
    
    return (
        <Grid style={styles.grid} >
            <Typography style={styles.heading}>{heading}</Typography>
            <Typography style={styles.info}>{info}</Typography>
        </Grid>
    );
};

export default TextGrid;