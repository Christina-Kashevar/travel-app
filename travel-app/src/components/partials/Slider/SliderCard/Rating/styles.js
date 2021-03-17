import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 20,
    top: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  stars: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      size: 'small',
    },
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
}));

export default useStyles;
