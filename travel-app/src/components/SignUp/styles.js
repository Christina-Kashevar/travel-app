import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100vw',
    height: `100vh`,
    background: 'url(./images/signUp-bg.jpg)',
  },
  formContainer: {
    maxWidth: 340,
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
  },
  avatarWrapper: {
    position: 'relative',
    width: 300,
    marginBottom: 20,
  },
  avatarImg: {
    width: '100%',
    objectFit: 'contain',
  },
  deleteAvatar: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: '50%',
    },
  },
  avatarInputLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    border: `2px dashed ${theme.palette.info.dark}`,
    transition: 'all 1000ms ease',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  avatarInput: {
    height: 0,
    outline: 0,
    opacity: 0,
    pointerEvents: 'none',
    userSelect: 'none',
  },
  avatarError: {
    margin: '10px 0',
    color: theme.palette.error.dark,
  },
  signError: {
    marginTop: 10,
    color: theme.palette.error.dark,
  },
}));

export default useStyles;
