import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  fileBase: {
    backgroundColor: '#000'
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#B4CDED',
    color: '#0D1821',
    fontWeight: 800,
      '&:hover': {
        backgroundColor: '#3070C5'
      }
  },
  clear: {
    backgroundColor: '#F15574',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#D01137'
    }
  }
}));