import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sliderSmall: {
      marginTop: 50
    },
    'slick-prev': {
      left: 14,
      zIndex: 50,
    },
    'slick-current': {
      border: '1px solid red',
      boxSizing: 'border-box'
    }
  })
)

export default useStyles;
