import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        borderRadius: '16px',
      },
      app: {
        backgroundSize: 'cover',
        transition: '0.4 ease',
      },
    main: {
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))',
      },
      cyrrencyCod: {
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        display: 'inline-block',
        margin: '0' ,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        color: '#FFF',
        fontSize: '2em',
        fontWeight: '900', 
        textShadow: '3px 6px rgba(50, 50, 70, 0.5)',
        textAlign: 'center',
        boxShadow: '3px 6px rgba(0, 0, 0, 0.2)',
      }, 
      currency: {
        color: '#FFF',
        fontSize: '1em',
        fontWeight: 800,
        textAlign: 'center',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
      },
    }));
    export default useStyles;