import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    width: '100%',
  },
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

export default useStyles;
