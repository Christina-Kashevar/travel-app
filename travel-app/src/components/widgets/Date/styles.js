import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: 50,
    margin: 10,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#75a9e4',
  },
  text: {
    color: '#FFF',
  }
});

export default useStyles;
