import React, { useState } from 'react';
import useStyles from './styles';

import { Box, Card, Typography, Button } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

export default function SliderCard({imgUrl, size, name, description, mark, handleBackdrop}) {
  const classes = useStyles();
  const [value, setValue] = useState(mark);

  const sectionStyle = {
    background: `url(${imgUrl}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  const showRating = size === 'large'

  return (
    <div>
      <Box style={ sectionStyle } className={classes[size]} m={1} >
        { showRating
        && < Box
            component="fieldset"
            borderColor="transparent"
            position="absolute"
            className={classes.rating}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              className={classes.stars}
            />
            <Button
              color='inherit'
              onClick={()=>handleBackdrop(true)}
              className={classes.button}
            >Оценки</Button>
        </Box>
        }
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
