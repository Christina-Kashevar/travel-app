import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  name:{
    textAlign: 'center',
    margin: '0 0 1% 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 35,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 45,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 55,
    },
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
    borderRadius: 16,
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
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 26,
    },
    textAlign: 'center',
  },
  text:{
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
    textAlign: 'justify',
    lineHeight: 1.2,
  },
  player: {
    height: theme.spacing(55),
    padding: `${theme.spacing(2)}px 0`,
  },

}));

export default useStyles;
