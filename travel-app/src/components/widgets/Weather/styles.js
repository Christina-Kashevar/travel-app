import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        height: 'auto',
        borderRadius: '16px',
      },
    app: {
        backgroundSize: 'cover',
        transition: '0.4 ease',
      },
    main: {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75))',
      },
    location: {
    color: '#FFF',
    fontSize: '3vw',
    fontWeight: 500,
    textAlign: 'center',
    textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
  },

  weatherBox: {
    textAlign: 'center',
  },

  temp: {
    width: '50%',
    position: 'relative',
    display: 'inline-block',
    margin: '10% auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '5% 10%',
    color: '#FFF',
    fontSize: '3vw',
    fontWeight: '900',
    textShadow: '3px 6px rgba(50, 50, 70, 0.5)',
    textAlign: 'center',
    boxShadow: '3px 6px rgba(0, 0, 0, 0.2)',
  },
  weather: {
    color: '#FFF',
    fontSize: '48px',
    fontWeight: '700',
    textShadow: '3px 3px rgba(50, 50, 70, 0.5)',
  },
  img:{
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '25%',
  },
  h:{
    color: '#FFF',
    fontWeight: 300,
    fontSize: '2.5vw',
    textAlign: 'center',
  },
  hSmall:{
    color: '#FFF',
    fontWeight: 300,
    fontSize: '2vw',
    textAlign: 'center',
    padding: 10,
  }
}
  ));

  export default useStyles;
