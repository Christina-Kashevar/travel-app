import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  signupLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: 20,
  },
}));

export default useStyles;
