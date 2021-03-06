import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function CountryCard(props) {
  const history = useHistory();
  const { id } = props;
  const classes = useStyles();

  function handleClick() {
    history.push(`/country/${id.country}`);
  }

  return (
    <Box mt={2} mb={2}>
      <Card className={classes.root} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/images/contemplative-reptile.jpg`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {id.country}
            </Typography>
            <Typography gutterBottom variant="h7" component="h3">
              Capital: {id.capital}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
