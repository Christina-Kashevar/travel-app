import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    height: `calc(100vh - ${theme.spacing(16)}px)`,
    overflow: 'auto',
  },
}));

export default useStyles;
