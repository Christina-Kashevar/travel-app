import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import useStyles from './styles';

import { MAPBOX_ACCESS_TOKEN } from '../../../data/constants';
import { Grid } from '@material-ui/core';

const MapBox = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

/*
function polygons() {
  map.addLayer(
    {
      id: 'country-boundaries',
      source: {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      },
      'source-layer': 'country_boundaries',
      type: 'fill',
      paint: {
        'fill-color': '#d2361e',
        'fill-opacity': 0.4,
      },
    },
    'country-label'
  );
}
*/

export default function Map () {
  const classes = useStyles();
  return (
      <MapBox
        style="mapbox://styles/mapbox/satellite-streets-v11?optimize=true"
        zoom={[5]}
        className={classes.mapContainer}
        >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </MapBox>
  );
}
