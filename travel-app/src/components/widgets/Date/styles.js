import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
    fontSize: '2vw',
    textAlign: 'center',
  }
});

export default useStyles;
