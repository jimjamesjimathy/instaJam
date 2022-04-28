import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { likePost, deletePost } from '../../../actions/posts';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize='medium' />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize='medium' />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize='medium' />&nbsp;Like</>;
  };

  const openPost = (e) => {
    history.push(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component='span'
        name='test'
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.name}</Typography>
          <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2} name='edit'>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
            }}
            style={{ color: 'white' }}
            size='medium'
          >
            <MoreHorizIcon fontSize='medium' />
          </Button>
        </div>
        )}
        <Typography className={classes.title} gutterBottom variant='h5' component='h2'>{post.title}</Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        <div className={classes.details}>
          <Typography variant='body2' component='h2'>{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button className={classes.likeButton} size='medium' disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.deleteButton} size='medium' onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize='medium' />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;