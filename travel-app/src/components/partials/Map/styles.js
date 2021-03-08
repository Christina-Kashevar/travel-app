import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  mapContainer: {
    width: '100%',
    height: '100%',
    minHeight: theme.spacing(50),
  },
  fsWrapper: {
    position: 'relative',
    width: '100%',
    height: '0',
  },
  fsButton: {
    color: theme.palette.getContrastText(blue[500]),
    position: 'absolute',
    top: theme.spacing(0.5),
    left: `calc(100% - ${theme.spacing(6.5)}px)`,
    zIndex: 2,
  },
  marker:{
    width:'0',
    height:'0',
  },
  navControlStyle: {
    right: '10',
    top: '10',
  },
  marketSpan:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    boxSizing:'border-box',
      width: '30px',
      height: '30px',
      background: '#75a9e4',  
      color:'#fff',
      border:'solid 2px',
      borderRadius: '0 70% 70%',
      boxShadow:'0 0 2px #000',
      cursor: 'pointer',
      transformOrigin:'0 0',      
      transform: 'rotateZ(-135deg)',   
  }
}));

export default useStyles;
