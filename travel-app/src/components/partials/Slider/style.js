import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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
      padding: 0
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
  fsWrapper: {
    position: 'relative',
    width: '100%',
    height: '0',
  },
  fsButton: {
    color: theme.palette.getContrastText(blue[500]),
    position: 'absolute',
    top: theme.spacing(0.5),
    left: `calc(100% - ${theme.spacing(6.5)}px)`,
    zIndex: 2,
  },
 })
)

export default useStyles;
