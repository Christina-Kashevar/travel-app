import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoButton: {},
  signupLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: 20,
  },
}));

export default useStyles;
