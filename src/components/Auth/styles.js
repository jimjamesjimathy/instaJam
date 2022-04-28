import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#344966'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#B4CDED',
    color: '#0D1821',
    fontWeight: 800,
      '&:hover': {
        backgroundColor: '#6B9CDB'
      }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#B4CDED',
    color: '#0D1821',
    fontWeight: 800,
      '&:hover': {
        backgroundColor: '#6B9CDB'
      }
  },
}));