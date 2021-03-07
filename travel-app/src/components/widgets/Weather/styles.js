import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
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
    fontSize: '2em',
    fontWeight: 500,
    textAlign: 'center',
    textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
  },
  
  weatherBox: {
    textAlign: 'center',
  },
  
  temp: {
    position: 'relative',
    display: 'inline-block',
    margin: '10% auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '15px 25px',
    color: '#FFF',
    fontSize: '3em',
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
  },
}
  ));

  export default useStyles;