import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 3,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
    backgroundColor: '#F0F4EF',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: '#fff',
    letterSpacing: '2px',
    textDecoration: 'none',
    fontSize: '1.75em',
    fontWeight: 300,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#B4CDED',
    borderRadius: 5,
    width: '387px',
    marginRight: '13px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    backgroundColor: '#F15574'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    textDecoration: 'none',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#0D1821',
    letterSpacing: 1,
      '&:hover': {
        color: '#3070C5'
      }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));