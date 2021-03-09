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
        [theme.breakpoints.down('sm')]: {
          width:'20px',
          height: '20px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
          width:'30px',
          height: '30px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
          width:'40px',
          height: '40px',
        },
        [theme.breakpoints.up('lg')]: {
          width:'50px',
          height: '50px',
        },
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
        [theme.breakpoints.down('sm')]: {
          fontSize: '10px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
          fontSize: '16px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
          fontSize: '22px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '26px',
        },
        fontWeight: '800',
        textShadow: '3px 6px rgba(50, 50, 70, 0.5)',
        boxShadow: '3px 6px rgba(0, 0, 0, 0.2)',
      },
      currency: {
        color: '#FFF',
        [theme.breakpoints.down('sm')]: {
          fontSize: '8px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
          fontSize: '10px',
        },
        [theme.breakpoints.between('md', 'lg')]: {
          fontSize: '14px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '18px',
        },
        fontWeight: 300,
        textAlign: 'center',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
      },
    }));
    export default useStyles;
