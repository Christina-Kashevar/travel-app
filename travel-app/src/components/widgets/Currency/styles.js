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
      size: {
        padding:0,
        width: '4vw',
        height: '4vw',
      },
      currencyCode: {
        textAlign: 'center',
        position: 'relative',
        display: 'inline-block',
        margin: '2% auto',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        color: '#FFF',
        fontSize: '2.5vw',
        fontWeight: '800',
        textShadow: '3px 6px rgba(50, 50, 70, 0.5)',
        boxShadow: '3px 6px rgba(0, 0, 0, 0.2)',
      },
      currency: {
        color: '#FFF',
        fontSize: '1.5vw',
        color: '#FFF',
        fontWeight: 300,
        textAlign: 'center',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
      },
    }));
    export default useStyles;
