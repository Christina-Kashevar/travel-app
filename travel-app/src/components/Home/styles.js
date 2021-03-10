import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
    width: '100vw',
    height: `calc(100vh - ${theme.spacing(18)}px)`,
    overflow: 'auto'
  },
}));

export default useStyles;
