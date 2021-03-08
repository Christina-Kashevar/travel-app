import React, {useCallback, useState} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import useStyles from './styles';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import { MAPBOX_ACCESS_TOKEN } from '../../../data/constants';
import { Grid, IconButton } from '@material-ui/core';

const MapBox = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

export default function Map () {
  const handleFs = useFullScreenHandle();
  const [fsState, setFsState] = useState(handleFs.active);
  const classes = useStyles();

  const trackFs = useCallback((state) => setFsState(state), []);

  const toggleFs = () => {
    if(handleFs.active) {
      handleFs.exit();
      return;
    }
    handleFs.enter();
  };

  return (
      <FullScreen handle={handleFs} onChange={trackFs}>
        <Grid className={classes.fsWrapper}>
          <IconButton onClick={toggleFs} className={classes.fsButton} color="primary">
            {(fsState) ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Grid>
        <MapBox
          style="mapbox://styles/mapbox/satellite-streets-v11?optimize=true"
          zoom={[5]}
          className={classes.mapContainer}
          >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </MapBox>
      </FullScreen>
  );
}
