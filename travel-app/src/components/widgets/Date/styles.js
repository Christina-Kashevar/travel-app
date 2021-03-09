import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 250,
    borderRadius: '16px',
    margin: '2% 0',
    padding: '0',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#75a9e4',
  },
  text: {
    color: '#FFF',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px',
    },
    textAlign: 'center',
  }
}));

export default useStyles;
