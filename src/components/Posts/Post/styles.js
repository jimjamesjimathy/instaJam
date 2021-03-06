import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    flex: 2,
    paddingTop: '75%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    marginTop: '10px',
    color: '#3070C5'
  },
  title: {
    padding: '0 16px',
    fontWeight: 'bold'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  likeButton: {
    color: '#3070C5',
    fontWeight: 800,
      '&:hover': {
        backgroundColor: '#3070C5'
      }
  },
  deleteButton: {
    color: '#F15574',
    '&:hover': {
      backgroundColor: '#D01137'
    }
  },
});