import React, { useCallback, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import ReactMapboxGl, { Layer, Source, Feature, Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import useStyles from './styles';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import { MAPBOX_ACCESS_TOKEN } from '../../../data/constants';
import { COUNTRY_COORDS, CAPITALS_COORDS } from '../../../data/geo';

import { Grid, IconButton, Box} from '@material-ui/core';

const MapBox = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

const COUNTRY_BONDS_SOURCE = {
  type: 'vector',
  url: 'mapbox://mapbox.country-boundaries-v1',
};

const paint = {
  'fill-color': '#ff00ff',
  'fill-opacity': 0.15,
};

const POSITION_CIRCLE_PAINT = {
  'circle-stroke-width': 4,
  'circle-radius': 10,
  'circle-blur': 0.15,
  'circle-color': '#3770C6',
  'circle-stroke-color': 'white',
};

export default function Map(props) {
  const handleFs = useFullScreenHandle();
  const [fsState, setFsState] = useState(handleFs.active);
  const { id } = props;
  const coords = COUNTRY_COORDS[id];
  const { lat, long } = coords;
  const classes = useStyles();

  const trackFs = useCallback((state) => setFsState(state), []);

  const toggleFs = () => {
    if (handleFs.active) {
      handleFs.exit();
      return;
    }
    handleFs.enter();
  };

  const filter = ['==', 'iso_3166_1', id.toUpperCase()];
  const capitalCoords = CAPITALS_COORDS[id];
  return (
    <FullScreen handle={handleFs} onChange={trackFs}>
      <Grid className={classes.fsWrapper}>
        <IconButton onClick={toggleFs} className={classes.fsButton} color="primary">
          {fsState ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
      </Grid>
      <MapBox
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/satellite-streets-v11?optimize=true"
        zoom={[4]}
        className={classes.mapContainer}
        center={[long, lat]}
      >
        <Marker coordinates={[capitalCoords[1], capitalCoords[0]]}>
          <Grid className={classes.marker}>
            <Box className={classes.marketSpan}></Box>
          </Grid>
        </Marker>
        <Source id="country-bonds" tileJsonSource={COUNTRY_BONDS_SOURCE} />
        <Layer
          type="fill"
          sourceId="country-bonds"
          paint={paint}
          sourceLayer="country_boundaries"
          filter={filter}
        ></Layer>
        <Layer type="circle" paint={POSITION_CIRCLE_PAINT}>
          <Feature coordinates={capitalCoords} />
        </Layer>
      </MapBox>
    </FullScreen>
  );
}
