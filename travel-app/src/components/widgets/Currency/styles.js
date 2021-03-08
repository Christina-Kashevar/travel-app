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
      currency: {
        color: '#FFF',
        fontSize: '1em',
        fontWeight: 800,
        textAlign: 'center',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
      },
    }));
    export default useStyles;