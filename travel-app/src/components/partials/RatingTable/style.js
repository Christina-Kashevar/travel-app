import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
}))

export default useStyles;
