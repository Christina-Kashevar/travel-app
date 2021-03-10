import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {    
    position: 'relative',
    width: '100vw',
    height: `100vh`,
    background: 'url(./images/signUp-bg.jpg)',
  },
  formContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textField: {
    marginBottom: 20,
    minWidth: 300,
  },
  languageSwitcher: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
  }
}));

export default useStyles;
