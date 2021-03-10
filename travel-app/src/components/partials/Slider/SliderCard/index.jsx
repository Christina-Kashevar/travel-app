import React from 'react';
import useStyles from './styles';
import { Box, Card, Typography } from '@material-ui/core/';

export default function SliderCard({imgUrl, size, name, description}) {
  const classes = useStyles();

  const sectionStyle = {
    background: `url(${imgUrl}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (
    <div>
      <Box style={ sectionStyle } className={classes[size]} m={1} >
        { name && description
        && <Card className={classes.card} >
            <Typography gutterBottom variant="h5" className={classes.name}>{name}</Typography>
            <Typography className={classes.text}>{description}</Typography>
           </Card>
        }
      </Box>
    </div>
  )
}
