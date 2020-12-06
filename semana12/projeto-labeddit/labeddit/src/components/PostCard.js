import React from "react"
import { useHistory } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PostCard = (props) => {
  const history = useHistory()

  const goToPostPage = () => {
    history.push(`/post/${props.post.id}`)
  }

  const handleUpVote = () => {
   props.handleVotePost(props.post.id, 1)
  }

  const handleDownVote = () => {
    props.handleVotePost(props.post.id, -1)
  }

  return(
      <Card>
    <CardHeader
      avatar={
        <Avatar>
          R
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title={props.post.title}
      subheader={props.post.username}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
          {props.post.text}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton onClick={handleUpVote}>
        <ArrowUpwardIcon color={props.post.userVoteDirection === 1 ? "primary" : "disabled"}/>
      </IconButton>
      <p>{props.post.votesCount}</p>
      <IconButton onClick={handleDownVote}>
        <ArrowDownwardIcon color={props.post.userVoteDirection === -1 ? "secondary" : "disabled"}/>
      </IconButton>
      {!props.hideCommentButton && (
        <Button
          variant="contained"
          onClick={goToPostPage}
          startIcon={<CommentIcon />}
        >
          Comentar
        </Button>)}
    </CardActions>
  </Card>
    )
}

export default PostCard