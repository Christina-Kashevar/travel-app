import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    width: '100%',
  },
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: theme.spacing(3),
    width: 'auto',
  },
}));

export default useStyles;
