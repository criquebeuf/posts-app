import { useComments, useCommentsDispatch } from './CommentsContext.js';

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
  const dispatch = useCommentsDispatch();
  let commentContent;
  console.log(comment);

  commentContent = (
    <>
    {comment.content}
    </>
  )

  return (
    <>
    {commentContent}
    </>
  )
}
