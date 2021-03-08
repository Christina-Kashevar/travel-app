import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  mapContainer: {
    width: '100%',
    height: '100%',
    minHeight: theme.spacing(50),
  },
  fsButton: {
    color: theme.palette.getContrastText(blue[500]),
    position: 'relative',
    top: theme.spacing(6),
    left: `calc(100% - ${theme.spacing(6)}px)`,
    zIndex: 2,
  }
}));

export default useStyles;
