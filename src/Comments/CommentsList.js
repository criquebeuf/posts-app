import { useComments } from './CommentsContext.js';

export default function CommentsList() {
  const comments = useComments();

  return (
    <ul>
      {comments.map(comment => (
        <ul key ={comment.id} className="comment">
          <Comment comment={comment} />
        </ul>
      ))}
    </ul>
  )
}

function Comment({ comment }) {
  console.log(comment);
  return (
    <>
      {comment.content}
    </>
  );
}
