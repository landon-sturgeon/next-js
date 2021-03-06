import Comment from "../components/comment.component";

const CommentList = ({comments}) => (
  <React.Fragment>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment}/>
    ))}
  </React.Fragment>
);

export default CommentList;