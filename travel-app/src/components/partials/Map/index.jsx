import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiaTMtY29kZSIsImEiOiJja2x2MDJva3AwY2NrMnZwbHAzaGF1dzMzIn0.ZU0Tx2eZcz4pZLwQfy9vOQ'
});

export default function Map () {
    return (
        <MapBox
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
              height: '50vh',
              width: '50vw'
          }}
          >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </MapBox>
    );
}
