import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  name:{
    textAlign: 'center',
    margin: '0 0 1% 0',
    fontSize: '5vw',
    textStroke: '4px black',
   textFillColor: 'white',
    fontWeight: '900',
    textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
  },
  media: {
    height: 0,
    paddingTop: '76%',
    width: 0,
    paddingLeft: '97%',
    margin: '0 2% 0 0',
    borderRadius: '16px',
  },
  flex:{
    float: 'left',
    width:'45%',
    display: 'flex',
    flexDirection:'column',
  },
  capital:{
    border:'solid 4px black',
    fontWeight: 300,
    margin:'3% 2% 0 0',
    fontSize: '2vw',
    textAlign: 'center',
  },
  text:{
    fontWeight: 300,
    fontSize: '1.2vw',
    textAlign: 'justify',
    lineHeight: 1.2,
  }
}));

export default useStyles;
